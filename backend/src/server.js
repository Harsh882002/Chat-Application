import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import autoRoutes from "../routes/auth.route.js";
import messageRoute from "../routes/message.route.js"
import { connectDB } from "../lib/db.js";

const app = express();
app.use(express.json()); // Parse JSON requests
app.use(cookieParser());


const result = dotenv.config();

if (result.error) {
  console.log("Failed to Load .env file", result.error);
}

app.use("/api/auth", autoRoutes);
app.use("/api/message", messageRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  console.log("Server is running on port: " + PORT);
  await connectDB();
});
