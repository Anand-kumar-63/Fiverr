import mongoose from "mongoose";

const gigSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    totalStar: {
      type: Number,
      default: 0,
    },
    starNumber: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    CoverImg: {
      type: String,
      required: true,
    },
    Image: {
      type: [String],
      default: [],
    },
    shortTitle: {
      type: String,
      required: true,
    },
    shortdesc: {
      type: String,
      required: true,
    },
    DeliveryTime: {
      type: Number,
      required: true,
    },
    revisionNumber: {
      type: Number,
      required: true,
    },
    Features: {
      type: [String],
      default: [],
    },
    sales: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Gigmodel = mongoose.model("Gig", gigSchema);
export default Gigmodel;
