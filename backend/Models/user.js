import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required:false
    },
    isSeller: {
        type: Boolean,
        default:false
    },
}, {
    timestamps: true
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
