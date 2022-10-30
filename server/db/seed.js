const db = require("./db");
const { Movie, Genre } = require("./");

const runtimeGenerator = () => {
  return Math.floor(Math.random() * 1000);
};

const movies = [
  {
    name: "Finding Nemo",
    runtime: runtimeGenerator(),
  },

  {
    name: "Halloween",
    runtime: runtimeGenerator(),
  },

  {
    name: "Texas Chainsaw Massacre",
    runtime: runtimeGenerator(),
  },

  {
    name: "Mario",
    runtime: runtimeGenerator(),
  },
];

const genres = [{ name: "horror" }, { name: "family" }];

const seed = async () => {
  await db.sync({ force: true });
  const [movie1, movie2, movie3, movie4] = await Promise.all(
    movies.map((movieData) => Movie.create(movieData))
  );
  const [genre1, genre2] = await Promise.all(
    genres.map((genreData) => Genre.create(genreData))
  );
  console.log({ movie1, genre1 });
  genre2.addMovies([movie1, movie4]);
  genre1.addMovies([movie2, movie3]);
};

seed();
