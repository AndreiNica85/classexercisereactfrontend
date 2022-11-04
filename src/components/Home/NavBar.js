import React from "react";
import "./navBar.css"

function NavBar() {
  return (
    <div class="topnav">
      <a class="active" href="/">
        Home</a>
      <a href="/flights">Flights</a>
      <a href="/about">About</a>
      <a href="/login">Log in</a>
    </div>
  );
}

export default NavBar;
