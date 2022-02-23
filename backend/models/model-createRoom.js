const mongoose = require('mongoose')
const {GroupSchema} = require('../models/model-group');
const {createActivitySchema} = require('../models/model-createActivity');
const {FeedSchema} = require('../models/model-feed');

const RoomsSchema = new mongoose.Schema({
    RoomName:{type: String, required: true},
    Course: {type: String, required: true},
    ClassDays: {type: String, required: true},
    YearsAndSection: {type: String, required: true},
    ClassTime: {type: String, required: true},
    Terms: {type: String, required: true},
    GradingSystem: {type: String, required: true},
    group: [GroupSchema],
    activity: [createActivitySchema],
    feed: [FeedSchema]

},{timestamps:true})

const RoomsModel = mongoose.model("Rooms",RoomsSchema)
module.exports = {RoomsModel, RoomsSchema }