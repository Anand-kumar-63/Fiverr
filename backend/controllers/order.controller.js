import CreatenewError from "../utils/createnewError.js"
import Gigmodel from "../Models/gig.Schema.js";
import order from "../Models/order.model.js";
import user from "../Models/user.js";

export const createOrder = async (req, res, next) => {
    try {
        const gig = await Gigmodel.findOne({
            _id: req.params.gigId
        })
        // check if the gig exist or not
        if (!gig) {
            next(CreatenewError(400, "No such gig exist"));
        }
        const Neworder = new order({
            gigId: gig._id,
            img: gig.CoverImg,
            title: gig.title,
            Price: gig.price,
            buyerId: req.userId,
            sellerId: gig.userId,
            payment_intent: "temporary",
        })
        const response = await Neworder.save();
        res.status(200).json({
            message: "order created",
            order: response
        })
    }
    catch (error) {
        return next(CreatenewError(400, error));
    }
};
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

