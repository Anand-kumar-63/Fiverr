import CreatenewError from "../utils/createnewError.js"
import Gigmodel from "../Models/gig.Schema.js";
import order from "../Models/order.model.js";
import Stripe from "stripe";
export const paymentIntent = async (req, res, next) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    try {
        const gig = await Gigmodel.findById(req.params.Id);
        if (!gig) {
            next(CreatenewError(400, "No such gig exist"));
        }
        // create stripe paymentIntent
        const payIntent = await stripe.paymentIntents.create({
            amount:gig.price*100,
            currency:"usd",
            automatic_payment_methods:{
                enabled:true
            }
        })
        console.log(payIntent);
        // create new order after the gig creation
        const Neworder = new order({
            gigId: gig._id,
            img: gig.CoverImg,
            title: gig.title,
            Price: gig.price,
            buyerId: req.userId,
            sellerId: gig.userId,
            payment_intent:payIntent.id,
        })

        const response = await Neworder.save();
        res.status(200).send({ ClientSecret: payIntent.client_secret });
    }
    catch (error) {
        next(CreatenewError(400, error));
    }
}
export const getOrders = async (req, res, next) => {
    try {
        console.log(req.userId);
        const orders = await order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            // to check if the order is completed or not

        }).select("img Price iscompleted paymnet_intent title")
        // will return only the specified fields
        res.status(200).send(orders);
    }
    catch (error) {
        return next(CreatenewError(400, error));
    }
};
export const confirm = async () => {
    try {

    }
    catch (error) {

    }
}

