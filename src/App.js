// App.js
import React from "react";
import './styleguide.css';
import SinglePlayerBoard from "./components/SinglePlayerBoard/SinglePlayerBoard";

import { Routes, Route } from "react-router-dom";
import './styleguide1.css';


import Sample from "./components/Sample";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SinglePlayerBoard/>} />
       
      </Routes>
    </div>
  );
}

export default App;
