import CreatenewError from "../utils/createnewError.js";
import Gigmodel from "../Models/gig.Schema.js";
import order from "../Models/order.model.js";
import Stripe from "stripe";

export const paymentIntent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const gig = await Gigmodel.findById(req.params.Id);
    if (!gig) {
      return next(CreatenewError(404, "No such gig exists"));
    }
    const payIntent = await stripe.paymentIntents.create({
      amount: gig.price * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    const newOrder = new order({
      gigId: gig._id,
      img: gig.CoverImg,
      title: gig.title,
      Price: gig.price,
      buyerId: req.userId,
      sellerId: gig.userId,
      payment_intent: payIntent.id,
    });
    await newOrder.save();
    return res.status(200).json({ clientSecret: payIntent.client_secret });
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await order
      .find({
        ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      })
      .select("img Price iscompleted payment_intent title");
    return res.status(200).json(orders);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};

export const confirm = async (req, res, next) => {
  try {
    const { payment_intent } = req.body;
    const updated = await order.findOneAndUpdate(
      { payment_intent },
      { iscompleted: true },
      { new: true }
    );
    if (!updated) {
      return next(CreatenewError(404, "Order not found"));
    }
    return res.status(200).json(updated);
  } catch (error) {
    return next(CreatenewError(400, error.message));
  }
};
