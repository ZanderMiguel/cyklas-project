const mongoose = require('mongoose')

const NotifSchema = new mongoose.Schema({
user: {type: Object, required: true},
room: {type: Object, required: true}
},{createdAt: -1})
const NotifModel = mongoose.model('notifications',NotifSchema)
module.exports = NotifModel