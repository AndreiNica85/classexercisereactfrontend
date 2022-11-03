import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import OptionsDest from "./OptionsDest"

function DestSelection(data){

    console.log("ORIGIN IN DEST: " + data.data)

    const [destination, setDestination] = useState([]);


    let urlDestination = "http://localhost:8080/flights/"+ data.data +"/destinations";
    console.log(urlDestination);

 
    fetch(urlDestination).then( (response) =>{return response.json()}).then( (q) => {  q.map((element)=>{destination.push(element)})  } )
    


return (
    <tr>
            <td><span>Destination:</span></td>
            <td>  
              <select className="destination" id="dest">
                {/* Tiene que hacer lo mismo que el de arriba 
                A unas malas: pongo input text*/}
                {destination.map((o) => {return <OptionsDest props={o} />;})}
                  
              </select>
            </td>
          </tr>
);




}

export default DestSelection;