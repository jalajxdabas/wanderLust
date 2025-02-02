const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");

module.exports.createRoute = async(req, res)=>{
    let newlisting = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    newlisting.reviews.push(newReview);
    await newReview.save();

    await newlisting.save();
    req.flash("success", "New Review Created!")
    res.redirect(`/listings/${newlisting._id}`);
    
};
module.exports.destroyRoute = async (req, res)=>{
    let{id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete( reviewId );
    req.flash("success", "Review Deleted!")
    res.redirect(`/listings/${id}`);
};
