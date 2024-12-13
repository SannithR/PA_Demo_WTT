// App.js
import React from "react";
import './styleguide.css';
import MultiPlayerBoard from "./components/MultiPlayerBoard/MultiPlayerBoard";
import SinglePlayerBoard from "./components/SinglePlayerBoard/SinglePlayerBoard";

import { Routes, Route } from "react-router-dom";
import MatchHub from "./components/MatchHub/MatchHub";
import './styleguide1.css';
import Board from "./components/Board/Board/Board";


import Sample from "./components/Sample";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Board/>} />
        <Route path="/multiplayer" element={<MultiPlayerBoard />} />
        <Route path="/matchhub" element={<MatchHub />} />
        <Route path="/singleplayer" element={<SinglePlayerBoard />} />
       
      </Routes>
    </div>
  );
}

export default App;
