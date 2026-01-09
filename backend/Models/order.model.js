import mongoose from "mongoose";
import user from "../Models/user.js"
import Gigmodel from "./gig.Schema.js";
const orderSchema = new mongoose.Schema({
    gigId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Gigmodel',
        req:true
    },
    img:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    buyerId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'user',
         required:true
    },
    sellerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    iscompleted:{
        type:Boolean,
        default:false,
        required:true
    },
    payment_intent:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const order = mongoose.model("Order",orderSchema);
export default order;