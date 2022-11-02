import React, { Component } from "react";
import axios from "axios";

class PeterBookFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origins: axios.get("http://localhost:8080/flights").then((response) => {
        console.log(response);
      }),
    };
  }

  render() {
    return (
      <div className="selectionDestination">
        <form>
          <select className="destination"></select>
          <input
            className="sendInfo"
            value="Book a flight!"
            type="submit"
          ></input>
        </form>
      </div>
    );
  }
}

export default PeterBookFlights;
