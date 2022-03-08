const mongoose = require ('mongoose')

const feedSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    commentID: [mongoose.Schema.Types.ObjectId],
    content:{ type: Object, required: true },
    author:{ type: Object, required: true },
    title:{ type: String, required: true }

}, {timestamps:true})

const feedModel = mongoose.model("Feed",feedSchema)
module.exports = feedModel
