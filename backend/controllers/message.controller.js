import CreatenewError from "../utils/createnewError.js";
import Message from "../Models/Message.Schema.js";
import Conversation from "../Models/Conversation.Schema.js";

export const createmessage = async (req, res, next) => {
  const newMessage = new Message({
    desc: req.body.desc,
    conversationId: req.body.conversationId,
    userId: req.userId,
  });
  try {
    const savedmessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readByBuyer: req.isSeller,
          readBySeller: !req.isSeller,
          lastMessage: req.body.desc,
        },
      }
    );
    return res.status(201).json(savedmessage);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const getmessages = async (req, res, next) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.Id,
    }).sort({ createdAt: 1 });
    return res.status(200).json(messages);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};
