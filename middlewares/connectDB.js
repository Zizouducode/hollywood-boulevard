import mongoose from "mongoose";

export const connectDB = (handler) => {
  return async (req, res) => {
    console.log("connectDB");

    if (mongoose.connections[0].readyState) {
      console.log("ou la");
      return handler(req, res);
    }
    console.log("ici");
    await mongoose.connect(process.env.DATABASE_URL);
    mongoose.set("strictQuery", false);

    return handler(req, res);
  };
};
