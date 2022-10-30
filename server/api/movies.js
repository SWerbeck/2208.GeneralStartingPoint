const express = require("express");
const router = express.Router();
const { Movie, Genre } = require("../db");

router.get("/", async (req, res, next) => {
  const movies = await Movie.findAll();
  res.send(movies);
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  const movie = await Movie.findByPk(id, {
    include: [Genre],
  });
  res.send(movie);
});

module.exports = router;
