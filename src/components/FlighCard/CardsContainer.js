import React from "react";
import NavBar from "../Home/NavBar";
import Card from "./Card";
import "./CardsContainer.css";

function CardsContainer() {

    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("__firebase_request_key")

    return (
        <div>
            <NavBar />
            <div className="cardsContainer">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>)


}

export default CardsContainer;