import axios from "axios";
import React, { useEffect, useState } from "react";

const GenresPage = () => {
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    const genres = await axios.get("./api/genres");
    setGenres(genres.data);
  };

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <div>
      <h1>Genres Page</h1>
      {genres.map((genre) => (
        <p key={genre.id}>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenresPage;
