const mongoose = require('mongoose')
const {RoomsSchema} = require('../models/model-createRoom');
const {GroupSchema} = require('../models/model-group');

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
    room: [RoomsSchema],
    group: [GroupSchema],

    
},{timestamps:true})

const RegistrationModel = mongoose.model("Registration",RegistrationSchema)
module.exports = RegistrationModel