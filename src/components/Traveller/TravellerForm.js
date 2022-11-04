import React from "react";
import "./TravellerForm.css";
// import "../Home/Home.css";
import NavBar from "../Home/NavBar";

function TravellerForm(flight){

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
                        <input className="inputA" type="text" id="fname" name="fname" ></input>

                        <label className="labelTraveller" for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" className="inputA"></input>

                        <label className="labelTraveller" for="email">Email:</label>
                        <input type="email" className="inputA" id="email" name="nie"></input>

                        <label className="labelTraveller" for="nie">NIE:</label>
                        <input type="text" className="inputA" id="nie" name="nie"></input>

                        <label className="labelTraveller" for="nation">Nationality:</label>
                        <input type="text" className="inputA" id="nation" name="nation"></input>

                        <label className="labelTraveller" for="age">Age:</label>
                        <input type="number" className="inputA" id="age" name="age"></input>

                    </div>
                    <div className="footer">
                        <a  className="button" href="/payment">Submit</a>
                        <a  id="button2" href="/" className="button">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TravellerForm;


