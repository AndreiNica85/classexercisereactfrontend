import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home"
import Flights from "./components/Flights/Flights";
import TravellerForm from "./components/Traveller/TravellerForm";


function App() {
  return (

      <Routes>
          <Route index element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/travellers" element={<TravellerForm />} />
      </Routes>
  );
}

export default App;
