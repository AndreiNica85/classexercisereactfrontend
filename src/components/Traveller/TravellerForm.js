import React from "react";
import "./TravellerForm.css";
import "../Home/Home.css";
import NavBar from "../Home/NavBar";

function TravellerForm(flight){

    return (
        <div className="grid-container">
            <NavBar></NavBar>
            <div className="form-wrapper">
                <form action="" className="">
                    <div className="header">
                        <h1>Traveller data.</h1>
                    </div>
                    <div className="body">
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" ></input>

                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname"></input>

                        <label for="email">Email:</label>
                        <input type="text" id="email" name="email"></input>

                        <label for="pass">Password:</label>
                        <input type="password" id="pass" name="pass"></input>

                        <label for="nation">Nationality:</label>
                        <input type="text" id="nation" name="nation"></input>

                        <label for="age">Age:</label>
                        <input type="number" id="age" name="age"></input>

                    </div>
                    <div className="footer">
                        <input type="submit" value="Submit" className="button"></input>
                        <input type="submit" value="Cancel" className="button"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TravellerForm;


