import React from "react";
import "./card.css"


function Card(flight){

    console.log(flight.flight)

    return  <div className="flight-card">
    <h2 className="company">Company</h2>
    <div>
        <p className="dataFlight">{flight.flight.origin}</p>
        <p className="dataFlight">{flight.flight.destination}</p>
        <p className="dataFlight">{flight.flight.departureDate}</p>
        <p className="dataFlight">{flight.flight.departureTime}</p>
        <a className="selected-button" href="/travellers?id=123&a=123">Book a Flight!</a> 
    </div>
</div>;


}

export default Card;