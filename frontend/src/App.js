// Routing Library
import { Routes, Route } from 'react-router-dom';

// Import css
import './App.css';
import './css/Homepage.css';
import './css/Signup.css';
import './css/Userpage.css';

// Import components
import SplashScreen from './components/SplashScreen';
import HomepageSlider from './components/HomepageSlider';
import Header from './components/Header';
import Chatting from './components/Chatting';
import Homepage from './components/Homepage';
import Signup from './components/Signup';
import Userpage from './components/Userpage';
import FriendChatting from './components/FriendChatting';
import RandomChatting from './components/RandomChatting';

// App
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/userpage=friends" element={<Userpage />} />
        <Route path="/userpage=friendchat" element={<FriendChatting />} />
        <Route path="/userpage=randomchat" element={<RandomChatting />} />
      </Routes>
    </div>
  );
}

export default App;