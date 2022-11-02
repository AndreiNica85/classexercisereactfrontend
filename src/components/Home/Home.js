import React from "react";
import "./Home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <NavBar />

      <div className="Container">
        <div className="titlecontainer">
          <h1 className="title">
            <strong>
              The <strong className="journey">journey</strong> of thousand miles
              begins with a single step
            </strong>
          </h1>
          <a href="/flights" className="search-button">Search Flights</a>
          <a href="#" className="search-button">Get Info</a>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
}

export default Home;
