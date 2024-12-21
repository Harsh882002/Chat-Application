import User from "../models/user.model.js"

export const signup = async(req,res) =>{
    const {fullName, email, password} = req.body;
    try{

        if(password.length < 6){
            return res.status(400).json({message: "Password must be at leat 6 characters "});
        }

        const user = await User.findOne({email});

        if(user) return res.status(400).json({message:"Email Already Exists "});

     }catch(error){

     }
};














export const login = (req,res) =>{
    res.send("login route")
}

export const logout = (req,res) =>{
    res.send("Logout route ");
}