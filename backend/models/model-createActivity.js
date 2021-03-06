const mongoose = require('mongoose')

const createActivitySchema = new mongoose.Schema({

    activityTopic:{type:String,required:true},
    activityTitle:{type:String,required:true},
    terms:{type:String,required:true},
    activityType:{type:String,required:true},
    activityPoints:{type:String,required:true},
    activityDueDate:{type:Date,required:true},
    activityInstruction:{type:String,required:true},

}, {timestamps:true})

const createActivityModel = mongoose.model("Create Activity",createActivitySchema)
module.exports = createActivityModel