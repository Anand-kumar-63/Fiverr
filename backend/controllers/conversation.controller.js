import Conversation from "../Models/Conversation.Schema.js"
import conversationRouter from "../Routes/Conversation.route.js";
import CreatenewError from "../utils/createnewError.js";
export const createConversation = async () => {
    try {
        const newConversaton = new Conversation({
            id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
            SellerId: req.isSeller ? req.userId : req.body.to,
            BuyerId: req.isSeller ? req.body.to : req.userId,
            readByBuyer: !req.isSeller,
            readBySeller: req.isSeller,
        })
        const savedconversation = await newConversaton.save();
        res.status(200).send(savedconversation);
    }
    catch (error) {
        console.log(error);
        next(CreatenewError(200, error));
    }
}
export const updateConversation = async () => {
    try {
        const updatedconversation = await Conversation.findByIdAndUpdate({
            id: req.params.id
        }, {
            $set: {
                ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true })
            }
        }, { new: true })
        res.status(200).send(updateConversation);
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
}

export const getSingleConversation = async () => {
    try {
        const conversation = await Conversation.findById({
            id: req.params.id
        })
        if (!conversation) {
            next(CreatenewError(403, "Not found!"));
        }
        res.status(200).send(conversation);
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
}

export const getConversation = async () => {
    try {
        const converstations = await Conversation.find({
            $or: [
                { SellerId: req.userId },
                { BuyerId: req.userId }
            ]
        }).sort({ updatedAt: -1 })
        if (converstations == []) {
            next(CreatenewError(400, "Not found!"));
        }
        res.status(200).send(converstations);
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
} 