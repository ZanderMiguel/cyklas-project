const mongoose = require('mongoose')

const RegistrationSchema = new mongoose.Schema({
    userType:{type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    image:{type:Buffer, required: true},
    emailAddress: {type: String, required: true},
    gender: {type: String, required: true},
    mobileNo: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    

},{timestamps:true})

const RegistrationModel = mongoose.model("Registration",RegistrationSchema)
module.exports = RegistrationModel