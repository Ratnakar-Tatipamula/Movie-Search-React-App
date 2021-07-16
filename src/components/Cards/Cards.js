import React from "react";
import Card from "../Card/Card";
import "./index.css";

const Cards = (props) => {
  return (
    <div className="cards">
      {/* {props.cards.map((card) => (
        <Card />
      ))} */}
      {props.movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Cards;
