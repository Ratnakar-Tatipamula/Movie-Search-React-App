import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Cards from "./components/Cards/Cards";
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);

  const handleMovies = (movies) => {
    console.log("MOVIES");
    setMovies(movies);
  };

  return (
    <div className="App">
      <Nav />
      <Search handleMovies={handleMovies} />
      <Cards movies={movies} />
    </div>
  );
}

export default App;
