import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home"
import Flights from "./components/Flights/Flights";
import TravellerForm from "./components/Traveller/TravellerForm";
import CardsContainer from "./components/FlighCard/CardsContainer";
import Payment from "./components/Payment/Payment";
import Done from "./components/Done/Done";
import NewFlight from "./components/AdministrationPanel/NewFlight";
import Analytics from "./components/AdministrationPanel/Analytics";


function App() {
  return (

      <Routes>
          <Route index element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/travellers" element={<TravellerForm />} />
          <Route path="/bookFlight" element={<CardsContainer />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/done" element={<Done />} />
          <Route path="/newflight" element={<NewFlight />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
      </Routes>
  );
}

export default App;
