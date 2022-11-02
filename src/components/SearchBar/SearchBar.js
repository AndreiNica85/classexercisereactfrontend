import React from "react";
import "./SearchBar.css";

function SearchBar(){



    return (
        <div>
            <form>
                <select className="destination">
                    {/* for each for all the flights */}
                    <option value={"destination1"}>Destination 1</option>
                    <option>Destination 2</option>
                    <option>Destination 3</option>
                    <option>Destination 4</option>
                </select>
                <span>Date1:</span>
                <input type="date"/>                               
                <span>Date2:</span>
                <input type="date"/>     
                <input className="sendInfo" value="Book a flight!" type="submit"></input>                         
            </form>
        </div>
    );


}

export default SearchBar;