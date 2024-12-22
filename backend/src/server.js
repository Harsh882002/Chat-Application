import express  from "express";
import dotenv from "dotenv";
dotenv.config();

 import autoRoutes from "../routes/auth.route.js";
import { connectDB } from "../lib/db.js";

const app = express();
app.use(express.json()); // Parse JSON requests

const result  = dotenv.config();

if(result.error){
    console.log("Failed to Load .env file", result.error);
} 

app.use("/api/auth", autoRoutes);

 

const PORT = process.env.PORT || 5001;
app.listen(PORT, async() =>{
    console.log("Server is running on port: " + PORT );
   await connectDB()
})

