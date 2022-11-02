import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home"
import Flights from "./components/Flights/Flights";
import TravellerForm from "./components/Traveller/TravellerForm";
import CardsContainer from "./components/FlighCard/CardsContainer";


function App() {
  return (

      <Routes>
          <Route index element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/travellers" element={<TravellerForm />} />
          <Route path="/bookFlight" element={<CardsContainer />} />
      </Routes>
  );
}

export default App;
