import express  from "express";
import dotenv from "dotenv";

 import autoRoutes from "../routes/auth.route.js";
import { connectDB } from "../lib/db.js";


dotenv.config();

const app = express();


app.use("/api/auth", autoRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log("Server is running on port: " +PORT );
    connectDB()
})

