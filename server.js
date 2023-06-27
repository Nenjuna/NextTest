const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
const PORT = process.env.PORT || 8000;
const next = require("next");

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const movieRoutes = require("./routes/movieRoutes.js");

app.use("/api/movies", movieRoutes);

// const movies = require("./moviess.json");
// const Movie = require("./models/movieModel");

// const tamil = movies["tamil"];
// const malayalam = movies["malayalam"];
// const hindi = movies["hindi"];
// const telugu = movies["telugu"];

// async function createMovies() {
//   for (const t of tamil) {
//     try {
//       const d = await Movie.create(t);
//       console.log(d.title, d._id);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// createMovies();

app.use(errorHandler);

app.listen(PORT, () => console.log(`listening on ${PORT}`.magenta.underline));
