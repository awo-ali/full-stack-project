import { useState, useEffect } from "react";
import './App.scss';
import Home from './container/Home/Home';
import PlayerCards from './container/PlayerCards/PlayerCards';
import AddCard from "./container/AddCard/AddCard";
import Navbar from './container/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(players);
const getPlayers = async () => {
  const response = await fetch("http://localhost:8080/players");
  const data = await response.json();
  setPlayers(data);
};

useEffect(() => {
  getPlayers();
}, []);

const handleInput = (event) => {
  const cleanInput = event.target.value.toLowerCase();
  setSearchTerm(cleanInput);
};

const filteredPlayers = players.filter((players) => {
  const playerNameLower = players.name.toLowerCase();

  return playerNameLower.includes(searchTerm);
});


  return (
    <Router>
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/playerCards" element={<PlayerCards filteredPlayers={filteredPlayers} handleInput={handleInput} />}  />
      <Route path="/addCard" element={<AddCard players={players}/> } />
    </Routes>
    </div>
    </Router>
  );
}

export default App;