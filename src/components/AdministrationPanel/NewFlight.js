import React, { useState } from "react";
import NavBarAdministration from "./NavBarAdministration";
import "./NewFlight.css"


export default function NewFlight(){

    // ORigin HAndler
    const [origin, setOrigin] = useState();
    const originHandler = (e) =>{ setOrigin(e.target.value )}
    // destination HAndler
    const [destination, setdestination] = useState();
    const destinationHandler = (e) =>{ setdestination(e.target.value )}
    // departureDate HAndler
    const [departureDate, setdepartureDate] = useState();
    const departureDateHandler = (e) =>{ setdepartureDate(e.target.value )}
    // departureTime HAndler
    const [departureTime, setdepartureTime] = useState();
    const departureTimeHandler = (e) =>{ setdepartureTime(e.target.value )}
    // departureTime HAndler
    const [Airline, setAirline] = useState();
    const airlineHandler = (e) =>{ setAirline(e.target.value )}
    // price HAndler
    const [price, setPrice] = useState();
    const priceHandler = (e) =>{ setPrice(e.target.value )}

    //submitHandler
    const submitHandler = (e) => {
        
        e.preventDefault();

        const newflight = {
            
                origin : origin,
                destination : destination,
                departureDate : departureDate,
                departureTime : departureTime,
                airline: Airline,
                price: price
            
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newflight)
        };

        fetch('http://localhost:8080/flights', requestOptions)
            .then(response => response.json())
            .then( (data) => { console.log(data) } );

            window.location.reload();

    }

    return (
        <div>
            <NavBarAdministration/>
    <div className="newFlightContainer">
        <form className="newFlightForm">

            <label>Origin: </label>
            <input onChange={originHandler} type="text" className="NForigin"/>

            <label>Destination: </label>
            <input onChange={destinationHandler} type="text" className="NFdestination"/>

            <label>Departure Date: </label>
            <input onChange={departureDateHandler} type="date" className="NFdepdate"/>

            <label>Departure Time: </label>
            <input onChange={departureTimeHandler}  type="time" className="NFdeptime"/>

            <label>Airline: </label>
            <input onChange={airlineHandler} type="text" className="NFdeptime"/>

            <label>Price: </label>
            <input onChange={priceHandler} type="number" className="NFdeptime"/>
            <button onClick={submitHandler} type="submit">Create new Flight</button>
        </form>
    </div>
    </div>
    );
}