import React, { useState } from "react";
import "./LogIn.css"


export default function LogIn(){


    const[user, setUser] = useState();
    const[password, setPassword] = useState();

    const passwordHandler = (e) =>{ setPassword(e.target.value)}
    const userHandler = (e) =>{ setUser(e.target.value)}



    const submitHandler = (e) => {
        e.preventDefault();

        window.location.href= "/admin"


    }

    return (
        <div className="loginContainer">
            <form className="loginForm">
                <label>
                    Username:
                </label>
                <input type="text" onChange={userHandler} className="logUser"></input>
                <br>
                </br>
            <label>
                    Password:
                </label>
                <input type="password" onChange={passwordHandler} className="logPass"></input>
                <br></br>
                <button type="submit" className="loginButton" onClick={submitHandler}>Log In</button>
            </form>
        </div>
    )


}