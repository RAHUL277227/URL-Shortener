const mongoose = require("mongoose");

const urlSchem = new mongoose.Schema({
    shortId : {
        type:String,
    },
    originUrl : {
        type : String,
    },
    visit : {
        type : Number,
    }
}) 

const URL = mongoose.model("url",urlSchem);

module.exports = URL;