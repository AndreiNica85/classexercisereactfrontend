import React from "react";
import "./../SearchBar/SearchBar.css"
import NavBar from "../Home/NavBar";
import "./../Home/navBar.css"
import axios from "axios";
import "./../Home/Home.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";



function Flights(){

    const [origin, setOrigin] = useState();
    const originHandler = (e) => {
        setOrigin(e.target.value);
        return origin;
    }

    const origins = ['Seville', 'Madrid', 'Barcelona']

    return (
    <div>
        <NavBar />
        <SearchBar origin={origins}/>
        
    </div>
    );

}

export default Flights;