import { Routes, Route } from 'react-router-dom';
import './App.css';
import './css/Homepage.css';
import './css/Signup.css';
import SplashScreen from './components/SplashScreen';
import HomepageSlider from './components/HomepageSlider';
import Header from './components/Header';
import Chatting from './components/Chatting';
import Homepage from './components/Homepage';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chatting" element={<Chatting />} />
      </Routes>
    </div>
  );
}

export default App;