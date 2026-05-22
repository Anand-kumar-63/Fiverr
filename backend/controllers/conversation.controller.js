import Conversation from "../Models/Conversation.Schema.js";
import CreatenewError from "../utils/createnewError.js";

export const createConversation = async (req, res, next) => {
  try {
    const to = req.body.to;
    const newConversation = new Conversation({
      id: req.isSeller ? `${req.userId}${to}` : `${to}${req.userId}`,
      SellerId: req.isSeller ? req.userId : to,
      BuyerId: req.isSeller ? to : req.userId,
      readByBuyer: !req.isSeller,
      readBySeller: req.isSeller,
      lastMessage: req.body.lastMessage || "",
    });
    const saved = await newConversation.save();
    return res.status(201).json(saved);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updated = await Conversation.findOneAndUpdate(
      { id: req.params.Id },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );
    if (!updated) {
      return next(CreatenewError(404, "Conversation not found"));
    }
    return res.status(200).json(updated);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const getSingleConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id });
    if (!conversation) {
      return next(CreatenewError(404, "Conversation not found"));
    }
    return res.status(200).json(conversation);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const getConversation = async (req, res, next) => {
  try {
    const conversations = await Conversation.find({
      $or: [{ SellerId: req.userId }, { BuyerId: req.userId }],
    })
      .populate("SellerId BuyerId", "username image email")
      .sort({ updatedAt: -1 });
    return res.status(200).json(conversations);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};
