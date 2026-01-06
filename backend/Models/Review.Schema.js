import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    gigId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Gigmodel"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:"UserModel"
    },
    star: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    desc:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const ReviewModel =  mongoose.model("ReviewModel",reviewSchema);
export default ReviewModel;
