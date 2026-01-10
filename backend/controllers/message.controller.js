import CreatenewError from "../utils/createnewError.js"
import Message from "../Models/Message.Schema.js";
import Conversation from "../Models/Conversation.Schema.js";
export const createmessage = async (req, res, next) => {
    const newMessage = new Message({
        desc: req.body.desc,
        conversationId: req.body.conversationId,
        userId: req.userId
    });
    try {
        const savedmessage = await newMessage.save();
        const updateconversation = await Conversation.findOneAndUpdate({
            id: req.body.conversationId
        }, {
            $set: {
                readByBuyer: !req.isSeller,
                readBySeller: req.isSeller,
                lastMessage: req.body.desc
            }
        }, { new: true })
        res.status(200).send(savedmessage);
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
}
export const getmessages = async (req, res, next) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.Id
        })
        res.status(200).send(messages);
    } catch (error) {
        next(CreatenewError(400, error));
    }
}
export const updatemessage = async () => {
    try {

    } catch (error) {
        next(CreatenewError(400, error));
    }
}
export const deletemessage = async () => {
    try {

    } catch (error) {
        next(CreatenewError(400, error));
    }
}