import React from "react";

function Card(flight){
    return  <div className="flight-card">
    <h2>Company</h2>
    <div>
        <p>Origin</p>
        <p>Destination</p>
        <p>DepartureDate</p>
        <p>DepartureTime</p>
        {/* Este a tiene que enviar a formulario de peter */}
        <a className="selected-button"></a> 
    </div>
</div>;


}

export default Card;