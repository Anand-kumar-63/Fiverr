import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
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
    img: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    Desc: {
        type: String,
        required: true
    },
    isSeller: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
