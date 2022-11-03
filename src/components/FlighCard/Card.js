import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./card.css"


function Card(flight){


   const clickHandler = () =>{
        window.location.href = `/travellers?id=${flight.flight.id}`;
    }

    console.log(flight.flight) 

    return (
        <div class="flight-card">
   <div class="flight-card-header">
     <div class="flight-logo">
        <img src="https://book.jetblue.com/assets/header/img/jetblue-white-reg.png"></img>
     </div>
     <div class="flight-data">
         <div class="passanger-details">
           <span class="title1">Passanger</span>
           <span class="detail1">John Doe</span>
         </div>
         <div class="passanger-depart">
           <span class="title1">Depart</span>
           <span class="detail1">{flight.flight.departureTime}</span>
         </div>
         <div class="passanger-arrives">
           <span class="title1">Date</span>
           <span class="detail1">{flight.flight.departureDate}</span>
         </div>
       </div>
   </div>
  <div class="flight-card-content">
    <div class="flight-row">
      <div class="flight-from">
        <span class="from-code">{flight.flight.origin}</span>
        <span class="from-city">{flight.flight.origin}</span>
      </div>
      <div class="plane">
      <img src="https://cdn.onlinewebfonts.com/svg/img_537856.svg" alt=""/>
      </div>
      <div class="flight-to">
        <span class="to-code">{flight.flight.destination}</span>
        <span class="to-city">{flight.flight.destination}</span>
      </div>
    </div>
    <div class="flight-details-row">
      <div class="flight-operator">
        <span class="title">OPERATOR</span>
        <span class="detail">{flight.flight.airline}</span>
      </div>
      <div class="flight-number">
        <span class="title">FLIGHT</span>
        <span class="detail">{flight.flight.id}</span>
      </div>
      <div class="flight-class">
        <span class="title">CLASS</span>
        <span class="detail">{flight.flight.price}</span>
      </div>
    </div>
    <a className="selected-button" onClick={clickHandler}>BOOK A FLIGHT</a>
  </div>
</div>
    )
/* //      <div className="flight-card">
//     <h2 className="company">Company</h2>
//     <div>
//         <p className="dataFlight">{flight.flight.origin}</p>
//         <p className="dataFlight">{flight.flight.destination}</p>
//         <p className="dataFlight">{flight.flight.departureDate}</p>
//         <p className="dataFlight">{flight.flight.departureTime}</p>
//         <a className="selected-button" href="/travellers?id=123&a=123">Book a Flight!</a> 
//     </div>
// </div>; */


}

export default Card;