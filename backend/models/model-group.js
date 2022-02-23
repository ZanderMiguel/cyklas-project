const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    groupName:{type: String, required: true},
    

},{timestamps:true})

const GroupModel = mongoose.model("Groups",GroupSchema)
module.exports = GroupModel