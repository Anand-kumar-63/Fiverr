import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    gigId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
const ReviewModel =  mongoose.model("ReviewModel",reviewSchema);
export default ReviewModel;
