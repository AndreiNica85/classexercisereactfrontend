import React from "react";
import "./FlightCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function FlightCard(origin) {
  console.log("FlightCard" + origin.origin);
  let urlflights = "http://localhost:8080/flights/cities/from/" + origin.origin;

  const ShowFlights = () => {
    const [flights, setPosts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(urlflights);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
    return <div>{flights}</div>;
  };

  const flights = ShowFlights();

  return (
    <div>
      {flights.props.children.map((o) => {
        console.log(o)
        return <Card props={o} />;
      })}
    </div>
  );
}

export default FlightCard;
