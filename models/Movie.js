import { Schema, models, model } from "mongoose";

const movie = new Schema({
  title: String,
  original_title: String,
  release_date: String,
  poster_path: String,
  overview: String,
});

const Movie = models.Movie || model("Movie", movie);

export default Movie;
