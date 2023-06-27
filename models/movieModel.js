const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    stars: {
      type: Array,
    },
    music: {
      type: Array,
    },
    lyrics: {
      type: Array,
    },
    year: {
      type: Array,
    },
    language: {
      type: String,
    },
    img: {
      type: String,
    },
    url: {
      type: String,
    },
    songs: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
