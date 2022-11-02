import React from "react";
import "./navBar.css"

function NavBar() {
  return (
    <div class="topnav">
      <a class="active" href="/">
        Home</a>
      <a href="/flights">Flights</a>
      <a href="/">Contact</a>
      <a href="/">About</a>
    </div>
  );
}

export default NavBar;
