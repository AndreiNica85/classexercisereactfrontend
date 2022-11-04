import React from "react";
import NavBarAdministration from "./NavBarAdministration";
import { useState } from "react";
import { useEffect } from "react";
import "./Analytics.css";
import axios from "axios";

export default function Analytics(){

    // Fetch Analytics API


    const [analytics, setAnalytics] = useState([]);

    
    useEffect(async () => {
        const dataF = await axios('http://localhost:8080/administration');
        setAnalytics(dataF.data)
      }, []);

    console.log(analytics);


    // 

return (

<div>
    <NavBarAdministration/>
<div className="analyticsContainer">

    <table className="Atable">
        <tr>
            <th>Unfinished not paid flights</th>
            <th>Count Visits</th>
            <th>Origin Selected</th>
            <th>Destinations Selected</th>
            <th>Paid Flights</th>
            <th>All pages visits</th>
        </tr>


        {/* New component tr for each analytics */}

        
         
    </table>


    
</div>
</div>) 


}