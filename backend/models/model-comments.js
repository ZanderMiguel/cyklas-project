const mongoose = require('mongoose')
const CommentSchema = new mongoose.Schema({
    announcement: {type: mongoose.Schema.Types.ObjectId},
    author: {type: mongoose.Schema.Types.ObjectId},
    content: {type: String, required: true},

},{timestamps: true})
const CommentModel = mongoose.model('comments',CommentSchema)
module.exports = {CommentModel,CommentSchema}