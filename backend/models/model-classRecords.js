const mongoose = require('mongoose');

const ClassRecordSchema = new mongoose.Schema({
    room: [{type: mongoose.Schema.Types.ObjectId}],
    courseYrSec: [{type: Array, required: true}],
    term: {type: String, required: true},
    user: [{type: mongoose.Schema.Types.ObjectId},[{type: Array, required: true}]],
    totalStudents: {type: Number},
    professor: {type: mongoose.Schema.Types.ObjectId},
},{timestamps: true})
const ClassRecordModel = mongoose.model('classRecord',ClassRecordSchema)
module.exports = {ClassRecordModel,ClassRecordSchema}