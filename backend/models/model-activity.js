const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId},
    activityTopic: {type: String,required: true},
    activityTitle: {type: String,required: true},
    terms: {type: String, required: true},
    activityType: {type: String, required: true},
    activityPoints: {type: Number, required: true},
    activityDueDate: {type: Date},
    media: {type: Buffer}
    
},{timestamp: true})
const ActivityModel = mongoose.model('activities',ActivitySchema)
module.exports(ActivityModel,ActivitySchema)