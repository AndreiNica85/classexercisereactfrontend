import React from "react";
import axios from "axios";
import { useState } from "react";
import "./SearchBar.css";

function SearchBar(){


    const [origin, setOrigin] = useState();
    const originHandler = (e) => {
        setOrigin(e.target.value);
    }


    const origins = () => {
        // Get all origins and put it in the selection


    };

    const getAllFlights = (e) => {

        e.preventDefault();

        // I get all the flights with the selected origin
        let url = "http://localhost:8080/flights";

        axios.get(url)
          .then((response) => console.log(response))
          .catch((err) => console.log(err));
      
  }
    


    return (
        <div className="selectionDestination">
            <form>
                <select className="destination" onChange={originHandler}>
                    {/* for each for all the flights */}
                    <option value={"destination1"}>Origin 1</option>
                    <option>Origin 2</option>
                    <option>Origin 3</option>
                    <option>Origin 4</option>
                </select>    
                <input className="sendInfo" value="Book a flight!" type="submit" onClick={getAllFlights}></input>                         
            </form>
        </div>
    );


}

export default SearchBar;