import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./../SearchBar/SearchBar.css";
import NavBar from "../Home/NavBar";
import "./../Home/navBar.css";
import "./../Home/Home.css";

function Flights() {
  const [origin, setOrigin] = useState();
  const originHandler = (e) => {
    setOrigin(e.target.value);
    return origin;
  };

  const origins = ["Seville", "Madrid", "Barcelona"];

  return (
    <div>
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default Flights;
