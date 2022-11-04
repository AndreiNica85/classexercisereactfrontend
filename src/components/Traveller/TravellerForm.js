import React from "react";
import "./TravellerForm.css";

import { useState } from "react";
// import "../Home/Home.css";
import NavBar from "../Home/NavBar";

function TravellerForm(flight){


    // Fname Handler:
    const [fname, setFname] = useState();
    const fNameHandler = (e) =>{
        setFname(e.target.value);
    }


    // Last Name handler:
    const [lname, setLname] = useState();
    const lNameHandler = (e) =>{
        setLname(e.target.value);
    }

    // Email Handler:
    const [email, setEmail] = useState();
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    }

    // NIE Handler
    const [nie, setnie] = useState();
    const nieHandler = (e) =>{
        setnie(e.target.value);
    }

    // Nationality Handler:
    const [nationality, setNationality] = useState();
    const nationalityHandler = (e) =>{
        setNationality(e.target.value);
    }

    // Age Handler:
    const [age, setAge] = useState();
    const ageHandler = (e) =>{
        setAge(e.target.value);
    }


    //href="/payment"
    const submitHandler = (e) => {

        e.preventDefault();

        const traveller = {
            "forename" : fname,
            "surname" : lname,
            "email" : email,
            "NIE" : nie,
            "age": age,
            "nationality": nationality
        }

        console.log(traveller);

        // POST request

    }



    return (
        <div className="grid-container">
            <NavBar></NavBar>
            <div className="form-wrapper">
                <form action="" className="formA">
                    <div className="header">
                        <h1>Traveller data</h1>
                    </div>
                    <div className="body">
                        <label className="labelTraveller" for="fname">First name:</label>
                        <input className="inputA" onChange={fNameHandler} type="text" id="fname" name="fname" ></input>

                        <label className="labelTraveller" for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" onChange={lNameHandler} className="inputA"></input>

                        <label className="labelTraveller" for="email">Email:</label>
                        <input type="email" className="inputA" id="email" onChange={emailHandler} name="nie"></input>

                        <label className="labelTraveller" for="nie">NIE:</label>
                        <input type="text" className="inputA" id="nie" onChange={nieHandler} name="nie"></input>

                        <label className="labelTraveller" for="nation">Nationality:</label>
                        <input type="text" className="inputA" id="nation" onChange={nationalityHandler} name="nation"></input>

                        <label className="labelTraveller" for="age">Age:</label>
                        <input type="number" className="inputA" id="age" onChange={ageHandler} name="age"></input>

                    </div>
                    <div className="footer">
                        <button onClick={submitHandler} className="button">Submit</button>
                        <a  id="button2" href="/" className="button">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TravellerForm;


