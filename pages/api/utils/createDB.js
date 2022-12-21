import { connectDB } from "../../../middlewares/connectDB";
import data from "../../../assets/data.json";
import Movie from "../../../models/Movie";

async function handler(req, res) {
  //   console.log(data.results);
  if (req.method === "GET") {
    try {
      const movies = await Movie.insertMany(
        data.results,
        function (error, docs) {}
      );
      console.log("movies=>", movies);
      res.status(200).json(movies);
    } catch (error) {
      console.log("catch all>>", error);
    }
  } else {
    res.status(400).json({ message: "method not supported" });
  }
}
export default connectDB(handler);
