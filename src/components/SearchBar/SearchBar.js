import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SearchBar.css";
import FlightCard from "../FlighCard/FlightCard";
import Options from "./Options";

function SearchBar() {
  const [origin, setOrigin] = useState();

  const originHandler = (e) => {
    e.preventDefault();
    setOrigin(document.querySelector(".destination").value);
    console.log(GetDestinations());
  };

  function GetDestinations() {
    let urlflights = "http://localhost:8080/flights/cities/from/" + origin;

    const [flights, setPosts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(urlflights);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
    return <div>{flights}</div>;
  }

  let url = "http://localhost:8080/flights";

  const ShowPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await axios.get(url);
          setPosts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);
    return <div>{posts}</div>;
  };

  const data = ShowPosts();

  return (
    <div>
      <div className="selectionDestination">
        <form>
          <select className="destination">
            {data.props.children.map((o) => {
              return <Options props={o} />;
            })}
          </select>
          <input
            className="sendInfo"
            value="Book a flight!"
            type="submit"
            onClick={originHandler}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
