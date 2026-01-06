import ReviewModel from "../Models/Review.Schema"
import CreatenewError from "../utils/createnewError"
import Gigmodel from "../Models/gig.Schema"
export const createreview = async (req, res, next) => {
    // sellers cant create a review 
    if (req.isSeller) {
        return next(CreatenewError(400, "Seller can't create a review"));
    }
    const newReview = new ReviewModel({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star
    })
    try {
        const review = await ReviewModel.findOne({
            gigId: req.body.gigId,
            userId: req.body.userId
        })
        if (review) {
            next(CreatenewError(403, "You have already created a review for this gig!"));
        }
        // WIP:If the user purchased this gig
        const savedreview = await review.save();

        // you have to update the stars in the gig using the gigId
        await Gigmodel.findById(
            { gigId: req.body.gigId },
            {
                $inc: {
                    totalStars: req.body.star,
                    starNumber: 1
                }
            }
        )
        res.status(200).json({
            message: "Review created succsfully",
            review: savedreview
        })
    } catch (error) {
        next(CreatenewError(400, error));
    }
}

export const getreview = async (req, res, next) => {
    try {
        const reviews = await Gigmodel.find({ gigId: req.body.gigId });
        res.status(200).send(reviews);
    } catch (error) {
        next(CreatenewError(400, error));
    }
}

export const deletereview = aysnc(req,res,next) => {
    if(req.isSeller){
        next(CreatenewError(200,"Seller cant't delete any review"));
    }
    try {
      const deletedreview = await ReviewModel.findByIdAndDelete({
        gigId:req.body.gigId,
        userId:req.body.userId
      })
      res.status(200).send("Review deleted sucessfully");
    }
    catch (error) {
     next()
    }
}