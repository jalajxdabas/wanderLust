const Listing = require("../models/listing.js");

module.exports.index =  async (req, res)=>{
    const allListings = await Listing.find({});
    // await Listing.findByIdAndDelete("677a4035fcf895d03405b3d3");
    // console.log(allListings);
    res.render("listings/index.ejs", {allListings});
};

module.exports.renderNewForm = (req, res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async(req, res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    // console.log(listing);
    if(!listing) {
        req.flash("error", "Listing you requested does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url);
    console.log(filename);
    // if(result.error){
    //     throw new ExpressError(400, result.error);
    // }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.editListing = async (req, res)=>{
    let{id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        res.flash("error", "listing you requested doesnt exist!");
        res.redirect("/listings");
    }
    let original_img = listing.image.url
    original_img = original_img.replace("/upload", "/upload/h_300,w_250")
    res.render("listings/edit.ejs", {listing, original_img});
};

module.exports.updateListing = async(req, res)=>{
    let{id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", " Listing Updated!");
    res.redirect("/listings");
};

module.exports.destroyisting = async (req, res)=>{
    let{id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};


