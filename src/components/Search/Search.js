import React, { useState } from "react";
import "./index.css";

const Search = (props) => {
  const [movie, setMovie] = useState("Avengers");

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(movie);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=c7e162477b3d1f286cbe911ecc7f73a4&language=en-US&query=${movie}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    props.handleMovies(data.results);
  };

  return (
    <div className="container">
      <h3>Search Movie</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          name="movie"
          value={movie}
          onChange={handleChange}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Search;
