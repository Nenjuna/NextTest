const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const next = require("next");

const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");
const connectDB = require("./config/db.js");
connectDB();
const movieRoutes = require("./routes/movieRoutes.js");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // server.get("/api/todolist", (req, res) => {
    //   return res.send({ list: [] });
    // });
    server.use("/api/movies", movieRoutes);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(4000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
