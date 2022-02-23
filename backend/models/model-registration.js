const mongoose = require('mongoose')
const Room = require('../models/model-createRoom');

const newRoom = new Room ({
    RoomName: { type: String },
    ClassTime: { type: mongoose.Schema.Types.ObjectId }
});

const RegistrationSchema = new mongoose.Schema({
    userType:{type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    image:{type:Buffer, required: false},
    emailAddress: {type: String, required: true},
    gender: {type: String, required: true},
    mobileNo: {type: String, required: false},
    username: {type: String, required: false},
    password: {type: String, required: true},
    rooms: [newRoom]
    

},{timestamps:true})

const RegistrationModel = mongoose.model("Registration",RegistrationSchema)
module.exports = RegistrationModel