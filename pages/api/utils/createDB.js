import { connectDB } from "../../../middlewares/connectDB";
import data from "../../../assets/data.json";
import Movie from "../../../models/Movie";

async function handler(req, res) {
  //   console.log(data.results);
  //   console.log(Movie);
  if (req.method === "GET") {
    try {
      for (let i = 0; i < data.results.length; i++) {
        data.results[i].reviews = "test";
      }
      console.log(data.results[0]);
      const movies = await Movie.insertMany(data.results);
      // console.log("movies=>", movies);
      res.status(200).json(movies);
    } catch (error) {
      console.log("catch all>>", error);
    }
  } else {
    res.status(400).json({ message: "method not supported" });
  }
}
export default connectDB(handler);
