import UserModel from "../Models/user.js";
// api tp handle Getuser 
export const Getuser = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            next(new Error("No such user exists"))
        }
        res.status(200).json({
            succes: true,
            message: "User Found",
            user: user
        })
    }
    catch (error) {
        console.log(error, "Error in getting the user");
        next(new Error("Get user Error"));
    }
}

// Api to handle the user deletion 
export const Deleteuser = async () => {
    try {
        const existinguser = await UserModel.findById(req.params.id);
        if (!existinguser) return res.status(400).send("user doesnt exist");

        const token = res.cookies.access_token;
        if (!token) return res.status(401).send("unauthorised user");

        jwt.verify(token, process.env.JWT_KEY, async (error, payload) => {
            if (payload.userId !== existinguser._id.toString()) {
                return res.status(401).send("you can only delete your account");
            }
            await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "user Deleted succesfully" })
        })
    }
    catch (err) {
        res.status(401).json({
            message: "Error in deleting the user",
        })
    }
}

export const updateUser = (req, res) => {
    try {

    }
    catch (error) {

    }
}