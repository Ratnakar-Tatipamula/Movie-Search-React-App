import './App.css';
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import React, { useState } from "react";

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
    </div>
  );
}

export default App;
