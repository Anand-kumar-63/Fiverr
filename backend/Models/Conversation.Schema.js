import mongoose from "mongoose";
const ConversationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    SellerId: {
        type: String,
        required: true
    },
    BuyerId: {
        type: String,
        required: true
    },
    readBySeller: {
        type: Boolean,
        required: true,
    },
    readByBuyer: {
        type: Boolean,
        required: true,
    }, 
    lastMessage: {
        type: String,
        required: false,
    },
},{
    timestamps:true
})
const Conversation = mongoose.model("ConversationSchema", ConversationSchema);
export default Conversation;