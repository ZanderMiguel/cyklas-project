const mongoose = require('mongoose')

const FeedSchema = new mongoose.Schema({
    postID:{type: String, required: true},
    content:{type: String, required: true},
    author: {type: String, required: true},
    time: {type: String, required: true},
    title:{type:String, required: true},
    commentID:{type: String, required: true},

},{timestamps:true})

const FeedModel = mongoose.model("Feed",FeedSchema)
module.exports = FeedModel