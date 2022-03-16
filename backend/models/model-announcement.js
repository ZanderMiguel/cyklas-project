const mongoose = require('mongoose')
const AnnouncementSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId},
    content: {type: String, required: true},
    media: {type: Buffer},
    comments: [{type: mongoose.Schema.Types.ObjectId}],
    rooms: {type: mongoose.Schema.Types.ObjectId}
},{timestamps: true})
const AnnouncementModel = mongoose.model('announcement',AnnouncementSchema)
module.exports = {AnnouncementModel,AnnouncementSchema}
