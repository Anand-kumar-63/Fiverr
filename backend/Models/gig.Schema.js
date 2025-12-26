import mongoose from "mongoose";
const gigSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    totalStar: {
        type: Number,
        default: 0
    },
    starNumber: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    CoverImg: {
        type: String,
        required: true
    },
    Image:{
        type:[String],
        required:false
    },
    shortTitle:{
        type:String,
        required:true
    },
    shortdesc:{
        type:String,
        required:true
    },
    DeliveryTime:{
        type:Number,
        required:true
    },
    revisionNumber:{
        type:Number,
        required:true
    },
    Features:{
        type:[String],
        require:false
    },
    sales:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})
const Gigmodel = mongoose.model("Gig", gigSchema);
export default Gigmodel;