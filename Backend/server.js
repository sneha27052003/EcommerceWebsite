import express from "express";
import colors from "colors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

import Razorpay from "razorpay";
import paymentRoute from "./routes/paymentRoutes.js";
// config({ path: "" });

//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));

app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8081;

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  feedback: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Handle form submission
app.post("/api/submit-feedback", async (req, res) => {
  console.log("Received feedback:", req.body);

  const { name, email, feedback } = req.body;

  try {
    await Feedback.create({ name, email, feedback });
    console.log("Feedback saved successfully");
    res.status(200).send("Feedback received! Thank you.");
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/get-feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error getting feedbacks:", error);
    res.status(500).send("Internal Server Error");
  }
});

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
