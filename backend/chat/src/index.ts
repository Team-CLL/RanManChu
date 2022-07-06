import dotenv from "dotenv";

import express, { Application } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

dotenv.config();

const app: Application = express();
const httpServer: any = createServer(app);
const io: Server = new Server(httpServer);

io.on("connection", (socket: Socket) => {});

httpServer.listen(process.env.PORT, () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: ${process.env.PORT}  🛡️
    ################################################
  `);
});
