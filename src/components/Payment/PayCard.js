import React, { useState } from "react";
import "./PayCard.css"

export default function PayCard(){


    // Name Hanlder:
    const [name, setName] = useState();
    const nameHandler = (e) => {
        setName(e.target.value)
    }

    // Card Nº Handler:
    const [number, setNumber] = useState();
    const numberHandler = (e) => {
        setNumber(e.target.value)
    }

    // Expiration Handler:
    const [expiration, setExpiration] = useState();
    const expirationHandler = (e) => {
        setExpiration(e.target.value)
    }

    // CVC Handler:
    const [cvc, setCvc] = useState();
    const cvcHandler = (e) => {
        setCvc(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const card = {
            name: name,
            number: number,
            expiration: expiration,
            cvc: cvc
        }
        console.log(card)
        window.location.href = "/done"
    }





    return (
        <div className="creditCardContainer">
            <form className="creditCard">
            <label>Name:</label>
            <input required onChange={nameHandler} type="text" className="Pname"/>
            <img className="logoCard" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"></img>
            <br></br>
            <label>Card Nº:</label>
            <input required onChange={numberHandler} type="text" className="Pcard"/>
            <br></br>
            <label>Expiration:</label>
            <input required onChange={expirationHandler} type="date" className="Pcaducidad"/>
            <label>CVC:</label>
            <input required onChange={cvcHandler} type="number" maxLength={3} className="Pcvc"/>
            <a onClick={submitHandler} className="Pbutton"> Pay </a>
            </form>
        </div>
    )
}