import React, { useState } from "react";
import Options from "./Options";
import { useEffect } from "react";
import axios from "axios";
import OptionsDest from "./OptionsDest";
import DestSelection from "./DestSelection"

function SearchBar() {

// Origin Handler

  const [origin, setOrigin] = useState();
  
  // Origin Handler

  const originHandler = (e) => {
    setOrigin(e.target.value);
    console.log("ORIGIN: " + origin)
  }




// Fetching Origins

  let url = "http://localhost:8080/flights/departureOrigins";

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
  const dataArray = data.props.children;

  // Destination handler:

  // Submit handler

  function submitHandler(e){
    e.preventDefault();
    let fecha = document.querySelector(".fecha").value;
    let or = document.querySelector("#origin").value;
    let dest = document.querySelector("#dest").value;
    window.location.href = `/bookFlight?date=${fecha}&or=${or}&dest=${dest}`;
  }


  return (
      <form>
        <table>
          <tr>
            <td><span>Origin:</span></td>
            <td>
              <select className="origin" id="origin" onChange={originHandler}>
                {/* Hacer Onchange y poner origin */}
                {dataArray.map((o) => {return <Options props={o} />;})}
              </select>
            </td>
          </tr>
          <DestSelection data={origin}/>
          <tr>
            <td><span>Departure date:</span></td>
            {/* Crear funcion handler para la fecha */}
            <td><input type="date" className="fecha"/></td>
          </tr>
          <tr>
            {/* cuando clicke en el submit llamar a una funcion que redirija a otra pagina y se lleve los datos
            En la nueva pagina:
            - Llamada a la api
            - for loop recorriendo el json
            - crear cards */}
            <td colSpan="2"><input className="sendInfo" value="Book a flight!" type="submit" onClick={submitHandler} ></input>
            </td>
          </tr>
        </table>
      </form>
   
  );
}

export default SearchBar;
