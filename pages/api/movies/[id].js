import { connectDB } from "../../../middlewares/connectDB";
import Movie from "../../../models/Movie";

async function handler(req, res) {
  console.log("params>>", req.query);
  if (req.method === "GET") {
    try {
      const movie = await Movie.findById(req.query.id);
      res.status(200).json(movie);
    } catch (error) {
      console.log("catch>>>", error);
    }
  } else {
    res.status(400).json({ message: "not found" });
  }
}
export default connectDB(handler);
