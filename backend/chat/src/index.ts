interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  message: string;
}

//----------------------

import { createAdapter } from "@socket.io/redis-adapter";
import dotenv from "dotenv";

import express, { Application } from "express";
import { createServer } from "http";
import { createClient } from "redis";
import { Server, Socket } from "socket.io";

dotenv.config();

const app: Application = express();
const httpServer: any = createServer(app);
const io: Server = new Server<
  ServerToClientEvents,
  ClientToServerEvents,
  InterServerEvents,
  SocketData
>(httpServer);

const pubClient = createClient({ url: "redis://localhost:6379" });
const subClient = pubClient.duplicate();

Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
});

const rooms = io.of("/").adapter.rooms;
const sids = io.of("/").adapter.sids;

// 대기중인 방 (나중에 조건을 통해 매칭 대비 Map으로 생성)
// <룸이름, 소켓아이디>
let WaitingRooms: Map<string, string> = new Map();

// 채팅중인 방
// <소켓아이디, 룸이름>
let ChattingRooms: Map<string, string> = new Map();

io.on("connection", (socket: Socket) => {
  socket.on("join", () => {
    if (WaitingRooms.size) {
      const roomName = WaitingRooms.keys().next().value;
      socket.join(roomName);
      console.log(
        `${WaitingRooms.get(roomName)}와 ${
          socket.id
        }가 ${roomName} 방에서 채팅을 시작했습니다.`
      );
      ChattingRooms.set(socket.id, roomName);
      ChattingRooms.set(WaitingRooms.get(roomName)!, roomName);
      WaitingRooms.delete(roomName);
      console.log(socket.rooms);
    } else {
      const room = Math.random().toString(36).substring(2, 11);
      socket.join(room);
      console.log(`${room} 방이 생성되었습니다.`);
      WaitingRooms.set(room, socket.id);
      console.log(`${socket.id}가 ${room} 방에서 대기 중입니다.`);
    }
  });

  socket.on("msg", (msg: string) => {
    const Room = ChattingRooms.get(socket.id)!;
    io.to(Room).emit(msg);
    console.log(`${socket.id}가 ${Room} 방에 "${msg}"를 보냈습니다.`);
  });
});

httpServer.listen(process.env.PORT, () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: ${process.env.PORT}  🛡️
    ################################################
  `);
});
