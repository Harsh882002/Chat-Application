import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
 
export const protectRoute = async(req, res, next) =>{
    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({message: "Unauthorized - No Token Provided "});
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded){
            return res.status(400).json({message: "User Not Found"})
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({message: "User Not Found"});
        }

        res.user = user;
        next();

    }catch(error){
        console.log("Error in protectROute middleware : ", error.message);
        res.status(500).json({message: "Interval server error"});
    }
}