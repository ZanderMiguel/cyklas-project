const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    users: [{type: mongoose.Schema.Types.ObjectId}],
    groupName: {type: String, required: true}

},{timestamps: true})
const GroupModel = mongoose.model('groups',GroupSchema)
module.exports = {GroupModel,GroupSchema}