import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home"
import Flights from "./components/Flights/Flights";


function App() {
  return (

      <Routes>
          <Route index element={<Home />} />
          <Route path="/flights" element={<Flights />} />
      </Routes>

  );
}

export default App;
