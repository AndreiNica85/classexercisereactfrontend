import React from "react";
import NavBar from "../Home/NavBar";
import Card from "./Card";
import "./CardsContainer.css";

function CardsContainer(flights){

    return (
    <div>
        <div className="cardsContainer">
            <NavBar/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>)
      

}

export default CardsContainer;