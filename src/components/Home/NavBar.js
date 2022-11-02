import React from "react";
import "./navBar.css"

function NavBar() {
  return (
    <div class="topnav">
      <a class="active" href="#home">
        Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  );
}

export default NavBar;
