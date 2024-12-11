// App.js
import React from "react";
import './styleguide.css';

import { Routes, Route } from "react-router-dom";


import Sample from "./components/Sample";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sample/>} />
       
      </Routes>
    </div>
  );
}

export default App;
