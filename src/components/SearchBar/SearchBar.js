import React, { useState } from "react";
import Options from "./Options";
import { useEffect } from "react";
import axios from "axios";

function SearchBar() {

  const [origin, setOrigin] = useState();

  const originHandler = (e) => {

    setOrigin(document.querySelector(".destination").value);
    console.log(origin)
    e.preventDefault();
  }

  let urlflights = "http://localhost:8080/flights/cities/from/" + origin;

  const ShowFlights = () => {
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
      <form>
        <table>
          <tr>
            <td><span>Origin:</span></td>
            <td>
              <select className="destination">
                {/* Hacer Onchange y poner origin */}
                {data.props.children.map((o) => {return <Options props={o} />;})}
              </select>
            </td>
          </tr>
          <tr>
            <td><span>Destination:</span></td>
            <td>  
              <select className="destination">
                {/* Tiene que hacer lo mismo que el de arriba 
                A unas malas: pongo input text*/}
                <option>asdasdasd</option>
                <option>asdasdasd</option>
                <option>asdasdasd</option>
                <option>asdasdasd</option>
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
            <td colSpan="2"><input className="sendInfo" value="Book a flight!" type="submit" onClick={originHandler}></input>
            </td>
          </tr>
        </table>
      </form>
   
  );
}

export default SearchBar;
