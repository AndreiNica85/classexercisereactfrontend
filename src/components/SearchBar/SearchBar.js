import React, { useState } from "react";
import Options from "./Options";
import { useEffect } from "react";
import axios from "axios";
import OptionsDest from "./OptionsDest";

function SearchBar() {

// Origin Handler

  const [origin, setOrigin] = useState();
  

  const originHandler = (e) => {

    setOrigin(e.target.value);

    let urlDestination = "http://localhost:8080/flights/cities/from/" + origin;

    fetch(urlDestination).then((response) =>{
      return response.json()
    }).then((destinations) => {

      for(let i = 0; i < destinations.length; i++){
        setDestination( arr => [...arr, `${destinations[i].destination}`]);
      }
      console.log(destination)

    })
      e.preventDefault();
  }

// Destination Handler


  const [destination, setDestination] = useState([]);


// Fetching Origins

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
                {data.props.children.map((o) => {return <Options props={o} />;})}
              </select>
            </td>
          </tr>
          <tr>
            <td><span>Destination:</span></td>
            <td>  
              <select className="destination" id="dest">
                {/* Tiene que hacer lo mismo que el de arriba 
                A unas malas: pongo input text*/}
                  {destination.map((o) => { return <OptionsDest data={o} />})}
              </select>
            </td>
          </tr>
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
