const express  = require('express');
const {chats} = require("./data/data");
const dotenv = require("dotenv");
const app =  express();
dotenv.config();


app.get("/",(req,res) =>{
    res.send("hello worlld");
})

app.get("/api/chats",(req,res) =>{
    res.send(chats);
})

app.get("/api/chats/:id",(req,res) =>{
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat);
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`server running successfully on port ${PORT}.......`);
})
