import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import OptionsDest from "./OptionsDest"

function DestSelection(data){

    console.log("ORIGIN IN DEST: " + data.data)

    const [destination, setDestination] = useState([]);
    const [origen, setOrigin] = useState([]);


    let urlDestination = "http://localhost:8080/flights/"+ data.data +"/destinations";

    const api = async () => {
      
      let res = await fetch(urlDestination);
      
      let data = await res.json();
      
      console.log(data)
      
      setDestination(data)
      
    };
    api();
    
  console.log(destination);
    


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