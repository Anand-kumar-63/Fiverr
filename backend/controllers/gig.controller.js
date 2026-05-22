import Gigmodel from "../Models/gig.Schema.js";
import CreatenewError from "../utils/createnewError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller) {
    return next(CreatenewError(403, "Only sellers can create gigs"));
  }
  try {
    const gig = await Gigmodel.create({
      userId: req.userId,
      ...req.body,
    });
    return res.status(201).json({ message: "Gig created", gig });
  } catch (error) {
    return next(CreatenewError(400, error.message || "Gig creation failed"));
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const existingGig = await Gigmodel.findById(req.params.id);
    if (!existingGig) {
      return next(CreatenewError(404, "Gig not found"));
    }
    if (String(existingGig.userId) !== String(req.userId)) {
      return next(CreatenewError(403, "You can only delete your gigs"));
    }
    await Gigmodel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Gig has been deleted" });
  } catch (error) {
    return next(CreatenewError(404, error.message));
  }
};

export const getGig = async (req, res, next) => {
  try {
    const existingGig = await Gigmodel.findById(req.params.id).populate("userId", "username image");
    if (!existingGig) {
      return next(CreatenewError(404, "Gig doesn't exist"));
    }
    return res.status(200).json({ message: "Gig", data: existingGig });
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const getGigs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.category && { category: q.category }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gte: Number(q.min) }),
        ...(q.max && { $lte: Number(q.max) }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const sortField = q.sort || "createdAt";
    const gigs = await Gigmodel.find(filters)
      .populate("userId", "username image")
      .sort({ [sortField]: -1 });
    return res.status(200).json(gigs);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const updateGig = async (req, res, next) => {
  const allowedFields = [
    "title",
    "desc",
    "price",
    "category",
    "DeliveryTime",
    "revisionNumber",
  ];
  const updates = {};
  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  });
  try {
    const gig = await Gigmodel.findById(req.params.id);
    if (!gig) {
      return next(CreatenewError(404, "Gig not found"));
    }
    if (String(gig.userId) !== String(req.userId)) {
      return next(CreatenewError(403, "You can only update your gig"));
    }
    const updated = await Gigmodel.findByIdAndUpdate(
      req.params.id,
      { $set: updates },
      { new: true, runValidators: true }
    );
    return res.status(200).json({ message: "Gig updated successfully", gig: updated });
  } catch (error) {
    return next(CreatenewError(403, error.message));
  }
};
