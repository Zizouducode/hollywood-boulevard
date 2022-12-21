import { connectDB } from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

async function handler(req, res) {
  // console.log("req>>>", req);
  if (req.method === "GET") {
    try {
      const allMovies = await Movie.find();

      res.status(200).json(allMovies);
    } catch (error) {
      console.log("catch all>>", error);
    }
  } else {
    res.status(400).json({ message: "method not supported" });
  }
}
export default connectDB(handler);
