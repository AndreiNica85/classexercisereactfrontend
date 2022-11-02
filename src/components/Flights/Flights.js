import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./../SearchBar/SearchBar.css";
import NavBar from "../Home/NavBar";
import "./../Home/navBar.css";
import "./../Home/Home.css";

function Flights() {
  return (
    <div>
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default Flights;
