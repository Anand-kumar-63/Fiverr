import ReviewModel from "../Models/Review.Schema.js";
import CreatenewError from "../utils/createnewError.js";
import Gigmodel from "../Models/gig.Schema.js";

export const createreview = async (req, res, next) => {
  if (req.isSeller) {
    return next(CreatenewError(403, "Seller can't create a review"));
  }
  try {
    const existing = await ReviewModel.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (existing) {
      return next(CreatenewError(403, "You have already reviewed this gig"));
    }
    const savedreview = await ReviewModel.create({
      userId: req.userId,
      gigId: req.body.gigId,
      desc: req.body.desc,
      star: req.body.star,
    });
    await Gigmodel.findByIdAndUpdate(req.body.gigId, {
      $inc: {
        totalStar: Number(req.body.star),
        starNumber: 1,
      },
    });
    return res.status(201).json({
      message: "Review created successfully",
      review: savedreview,
    });
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const getreview = async (req, res, next) => {
  try {
    const reviews = await ReviewModel.find({ gigId: req.params.Id }).populate(
      "userId",
      "username image"
    );
    return res.status(200).json(reviews);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const deletereview = async (req, res, next) => {
  if (req.isSeller) {
    return next(CreatenewError(403, "Seller can't delete reviews"));
  }
  try {
    await ReviewModel.findOneAndDelete({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    return res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};
