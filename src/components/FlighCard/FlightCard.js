import React from "react";
import "./FlightCard.css"

function FlightCard(flight){

    return (
        <div className="flight-card">
            <h2>Company</h2>
            <div>
                <p>Origin</p>
                <p>Destination</p>
                <p>DepartureDate</p>
                <p>DepartureTime</p>
                <a className="selected-button"></a> 
            </div>
        </div>
    );


}

export default FlightCard;