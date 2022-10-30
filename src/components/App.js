import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import GenresPage from "./GenresPage";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
/* 
    This is you entry point for your routes
*/
const App = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/movies"}>
          <button>Movies</button>
        </Link>
        <Link to={"/genres"}>
          <button>Genres</button>
        </Link>
      </div>

      <Routes>
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
