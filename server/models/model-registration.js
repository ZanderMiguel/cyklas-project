const mongoose = require('mongoose')
const {v4: RegID} = require('uuid')

const RegistrationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    password: {type: String, required: true}    

},{timestamps:true})

const RegistrationModel = mongoose.model("Registration",RegistrationSchema)
module.exports = {RegistrationModel,RegistrationSchema}