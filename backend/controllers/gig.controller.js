import Gigmodel from "../Models/gig.Schema.js";
import CreatenewError from "../utils/createnewError.js";
export const createGig = async (req, res) => {
    if (!req.body.isSeller) {
        console.log("why are you hhere");
        return res.status(400).send("You are not the seller you cannot create gigs");
    }
    const Gigdata = new Gigmodel({
        userId: req.userId,
        ...req.body
    })
    try {
        const Gig = await Gigdata.save();
        console.log(Gig);
        return res.status(200).json({ message: "Gig created", gig: Gig })
    }
    catch (error) {
        next(CreatenewError(400, "gig creation failed"));
    }
}

export const deleteGig = async (req, res, next) => {
    try {
        const existingGig = await Gigmodel.findById(req.params.id);
        console.log(existingGig);
        console.log(req.body);
        if (existingGig.userId != req.body.userId) {
            return next(CreatenewError(403, "you can only delete your gigs"));
        }
        await Gigmodel.findByIdAndDelete(req.params.id);
        return res.status(200).send("Gig has been deleted!");
    }
    catch (error) {
        next(CreatenewError(404, error))
    }
}
export const getGig = async (req, res) => {
    try {
        const existingGig = await Gigmodel.findById(req.params.id);
        if (!existingGig) return next(CreatenewError(400, "Gid doesn't exist"));
        console.log("jdbci");
        res.status(200).send({ message: "Gig", data: existingGig })
    }
    catch (error) {
        next(CreatenewError(200, error));
    }
}
export const getGigs = async (req, res) => {
    const q = req.query;
    // Object spread merges objects into one final object.
    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.category && { category: q.category }),
        ...((q.min || q.max) && {
            price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) }
        }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } })
    }
    try {
        const gigs = await Gigmodel.find(filters).sort({[q.sort]:-1});
        return res.status(200).json(gigs); 
    }
    catch (error) {
        next(CreatenewError(200, error))
    }
}
export const updateGig = async (req, res) => {
    const allowedFields = [
        "title",
        "description",
        "price",
        "category",
        "DeliveryTime",
        "revisionNumber",
    ];
    const updates = {};
    //Loop over what I allow, not what the user sends
    allowedFields.forEach((fields) => {
        if (req.body[fields] !== undefined) {
            updates[fields] = req.body[fields];
        }
    })
    try {
        const gig = await Gigmodel.findById(req.params.id);
        if (!gig) {
            return next(CreatenewError(404, "Gig not found"));
        }
        if (gig.userId != req.body.userId) {
            return next(CreatenewError(403, "You can only delete your Gig"));
        }
        const updatedfields = await Gigmodel.findByIdAndUpdate(req.params.id, { $set: updates }, { new: true, runValidators: true })
        console.log(updatedfields);
        res.status(200).json({ message: "Gig updated successfully" })
    }
    catch (error) {
        next(CreatenewError(403, error))
    }
}