const asyncHandler = require("express-async-handler");
const Movie = require("../models/movieModel");

// @description Get Movies
// @route GET /api/movies
// @access private

const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find(
    { language: "Hindi", year: "2023" },
    { _id: 1, title: 1, language: 1 }
  );
  res.status(200).json({ message: "Done!", data: movies });
});

// @description Add Movie
// @route POST /api/movies
// @access private

const setMovie = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Invalid request for post request");
  }
  const data = {
    title: req.body.title,
    stars: req.body.stars,
    music: req.body.music,
    director: req.body.director,
    lyrics: req.body.lyrics,
    year: req.body.year,
    language: req.body.language,
    songs: req.body.songs,
    img: req.body.img,
    url: req.body.url,
  };
  const movie = await Movie.create(data);
  res.status(200).json({ movie });
});

// @description Update Movie
// @route PUT /api/movies
// @access private

const updateMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated movie ${req.params.id}` });
});

// @description Delete Movies
// @route DELETE /api/movies
// @access private

const deleteMovie = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted movie ${req.params.id}` });
});

module.exports = {
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
};
