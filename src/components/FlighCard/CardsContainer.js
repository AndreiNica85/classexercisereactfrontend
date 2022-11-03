import React from "react";
import NavBar from "../Home/NavBar";
import Card from "./Card";
import { useState } from "react";
import "./CardsContainer.css";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function CardsContainer() {
  // Getting QueryParams:

  const [searchParams, setSearchParams] = useSearchParams();
  let origin = searchParams.get("or");
  let destination = searchParams.get("dest");
  let date = searchParams.get("date");

  // Creating the URL:

  const url = `http://localhost:8080/flights/cities/${origin}/${destination}/${date}`;

  // Call api with origin/destination/date:

  const [dataFlights, setDataFlights] = useState([]);

  console.log(dataFlights);

  // Create a variable for all the flights:

  useEffect(async () => {
    const dataF = await axios(url);
    setDataFlights(dataF.data)
  }, []);

  return (
    <div>
      <NavBar />
      <div className="cardsContainer">
        {dataFlights.map((qwe) => {
          return <Card flight={qwe} />;
        })}
      </div>
    </div>
  );
}

export default CardsContainer;
