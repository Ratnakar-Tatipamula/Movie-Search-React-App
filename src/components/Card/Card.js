import React from "react";
import "./index.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.movie.original_title}</h1>
      <p className="p">{new Date(props.movie.release_date).getFullYear()}</p>
      <p className="card-p">{props.movie.overview}</p>
    </div>
  );
};

export default Card;
