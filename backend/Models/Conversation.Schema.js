import mongoose from "mongoose";
const ConversationSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    SellerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    BuyerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    readBySeller:{
        type: Boolean,
        required: true,
    },
    readByBuyer:{
        type: Boolean,
        required: true,
    }, 
    lastMessage:{
        type: String,
        required: true,
    },
},{
    timestamps:true
})
const Conversation = mongoose.model("ConversationSchema", ConversationSchema);
export default Conversation;