import React from "react";
import "./../Home/navBar.css"

function NavBarAdministration() {
  return (
    <div class="topnav">
      <a class="active" href="/">Home</a>
      <a href="/newflight">New Flight</a>
      <a href="/analytics">Analytics</a>

    </div>
  );
}

export default NavBarAdministration;
