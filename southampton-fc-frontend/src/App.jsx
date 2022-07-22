
import './App.scss';
import Home from './container/Home/Home';
import PlayerCards from './container/PlayerCards/PlayerCards';
import SeasonsStats from './container/SeasonStats/SeasonStats';
import Navbar from './container/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/playerCards" element={<PlayerCards/>} />
      <Route path="/seasonStats" element={<SeasonsStats/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
