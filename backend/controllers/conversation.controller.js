import Conversation from "../Models/Conversation.Schema.js"
import CreatenewError from "../utils/createnewError.js";
export const createConversation = async (req, res, next) => {
    console.log
    try {
        const newConversaton = new Conversation({
            id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
            SellerId: req.isSeller ? req.userId : req.body.to,
            BuyerId: req.isSeller ? req.body.to : req.userId,
            readByBuyer: !req.isSeller,
            readBySeller: req.isSeller,
            lastMessage: req.body.lastMessage
        })
        const savedconversation = await newConversaton.save();
        res.status(200).send(savedconversation);
    }
    catch (error) {
        console.log(error);
        next(CreatenewError(200, error));
    }
}
export const updateConversation = async (req, res, next) => {
    try {
        const updatedconversation = await Conversation.findOneAndUpdate({
            id: req.params.Id
        }, {
            $set: {
                ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true })
            }
        }, { new: true })
        console.log(updatedconversation);
        res.status(200).send(updatedconversation);
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
}

export const getSingleConversation = async (req, res, next) => {
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

export const getConversation = async (req, res, next) => {
    try {
        const converstations = await Conversation.find({
            $or:[
                { SellerId: req.userId },
                { BuyerId: req.userId }
            ]
        }).populate("SellerId BuyerId").sort({ createdAt: -1})
        if (!converstations.length) {
            next(CreatenewError(400, "Not found!"));
        }
        res.status(200).send(converstations);
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
} 