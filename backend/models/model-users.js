const mongoose = require('mongoose')
const {RoomsSchema} = require('./model-createRoom')
const {RegistrationSchema} = require('./model-registration')
const UserSchema = new mongoose.Schema({
    userType:{type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    image:{type:Buffer, required: true},
    emailAddress: {type: String, required: true},
    gender: {type: String, required: true},
    rooms: [{type: mongoose.Schema.Types.ObjectId}],
    RegID: {type: mongoose.Schema.Types.ObjectId, unique: true},
    quizlit: [{type: mongoose.Schema.Types.ObjectId}]

},{timestamps:true})

const UserModel = mongoose.model("Users",UserSchema)
module.exports = UserModel