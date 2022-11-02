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
          <button className="search-button"><a href="/flights">Search Flights</a></button>
          <button className="search-button"><a href="/Info">Get Info</a></button>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
}

export default Home;
