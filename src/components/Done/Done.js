import React from "react";
import "./Done.css";
import "./../Home/Home.css"


export default function Done(){

    setTimeout(() => {
        window.location.href="/";
      }, "5000")
    

    return(<div className="doneContainer">
        <img className="doneImage" alt="doneimage" src="https://cdn-icons-png.flaticon.com/512/1044/1044122.png"></img>
        <h1>Thanks for flying with us</h1>
        <h1>Have a nice Flight!</h1>
    </div>)

}