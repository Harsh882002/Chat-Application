import mongoose from "mongoose";

const messageSchema = new mongoose.schema(
    {
        senderId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        receverId:{
            type: mongoose.Schema.ObjectId,
             ref : "User",
        required: true,
        },
        text:{
            type:String,
        },
        image:{
            type: String
        },
    },
    {
        timestmaps : true
    }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
