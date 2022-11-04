import React from "react";
import "./PayCard.css"

export default function PayCard(){


    return (
        <div className="creditCardContainer">
            <form className="creditCard">
            <label>Name:</label>
            <input type="text" className="Pname"/>
            <img className="logoCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"></img>
            <br></br>
            <label>Card Nº:</label>
            <input type="text" className="Pcard"/>
            <br></br>
            <label>Expiration:</label>
            <input type="date" className="Pcaducidad"/>
            <label>CVC:</label>
            <input type="number" max={999} className="Pcvc"/>
            <a href="/done" className="Pbutton"> Pay </a>
            </form>
        </div>
    )
}