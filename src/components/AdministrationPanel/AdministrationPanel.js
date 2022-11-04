import React from "react";
import NavBar from "../Home/NavBar";
import Analytics from "./Analytics";
import NewFlight from "./NewFlight";
import NavBarAdministration from "./NavBarAdministration";
import "./AdministrationPanel.css"


export default function AdministrationPanel(){
    return(
        <div>
    <NavBarAdministration/>
        <div className="AdminContainer">
            <div className="AdminElement">
                <h2>Analytics</h2>
                <a href="/analytics"><img className="Adminimg" src="https://cdn-icons-png.flaticon.com/512/921/921591.png"></img>
                </a> </div>
            <div className="AdminElement">
                <h2>Create New Flight</h2>
                <a href="/newflight"><img className="Adminimg" src="https://cdn-icons-png.flaticon.com/512/723/723276.png"></img>
                </a>           </div>
        </div>
    </div>
    )
}