const mongoose = require('mongoose')

const googleAuthSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    emailAddress:{type:String,required:true}
},{timestamps:true})

const googleAuthModel = mongoose.model("Google Auth",googleAuthSchema)
module.exports =googleAuthModel