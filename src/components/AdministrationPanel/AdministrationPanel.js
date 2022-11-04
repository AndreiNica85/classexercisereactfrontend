import React from "react";
import NavBar from "../Home/NavBar";
import Analytics from "./Analytics";
import NewFlight from "./NewFlight";


export default function AdministrationPanel(){
    return(
        <div>
    <NavBarAdministration/>
        <div>
            <div>
                <h2>Analytics</h2>
                <img src=""></img>
            </div>
            <div>
                <h2>Create New Flight</h2>
                <img src=""></img>
            </div>
        </div>
    </div>
    )
}