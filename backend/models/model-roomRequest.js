const mongoose = require('mongoose')
const RoomRequestSchema = mongoose.Schema({
    requests: [{type: Object, required: true}],
    room: {type: Object, required: true},
    user: {type: mongoose.Schema.Types.ObjectId}

},{timestamps: true})

const RoomRequestModel = mongoose.model('RoomRequest',RoomRequestSchema)
module.exports = RoomRequestModel