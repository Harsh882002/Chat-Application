import jwt from "jsonwebtoken";

export const generateToken = (userId,res) =>{
    const token = jwt.sign({userId}, process.env.SECRET_KEY,{
        expiresIn:"7d"
    })



res.cookie("jwt",token,{
    maxAge : 7*24*60*1000,  //MS
    httpOnly : true,  // Prevent XSS attacks cross-site scripting attacks 
    sameSite: "strict", //CSRF attacks cross-site request forgery attacks 
    secure: process.env.NODE_ENV !== "development"
})
}   