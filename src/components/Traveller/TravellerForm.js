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
                        <h1>Traveller data.</h1>
                    </div>
                    <div className="body">
                        <label for="fname">First name:</label>
                        <input className="inputA" type="text" id="fname" name="fname" ></input>

                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" className="inputA"></input>

                        <label for="email">Email:</label>
                        <input type="text" className="inputA" id="email" name="email"></input>

                        <label for="pass">Password:</label>
                        <input type="password" className="inputA" id="pass" name="pass"></input>

                        <label for="nation">Nationality:</label>
                        <input type="text" className="inputA" id="nation" name="nation"></input>

                        <label for="age">Age:</label>
                        <input type="number" className="inputA" id="age" name="age"></input>

                    </div>
                    <div className="footer">
                        <input type="submit" className="inputA" value="Submit" className="button"></input>
                        <input type="submit" className="inputA" value="Cancel" className="button"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TravellerForm;


