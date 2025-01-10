import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

import autoRoutes from "../routes/auth.route.js";
import messageRoute from "../routes/message.route.js";
import { connectDB } from "../lib/db.js";
import { app, server } from "../lib/socket.js";

app.use(express.json({limit: '50mb'})); // Parse JSON request
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", autoRoutes);
app.use("/api/messages", messageRoute);

const result = dotenv.config();

if (result.error) {
  console.log("Failed to Load .env file", result.error);
}

const PORT = process.env.PORT;

server.listen(PORT, async () => {
  console.log("Server is running on port: " + PORT);
  await connectDB();
});
