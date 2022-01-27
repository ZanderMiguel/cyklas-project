const {json} = require('express')
const mongoose = require('mongoose')

const ClassSchema = new mongoose.Schema({
            professorName: {type: String, required: true},
            course: {type: String, required: true},
            yearAndSection: {type: String, required: true},
            subjectCode: {type: String, required: true},
            subjectName: {type: String, required: true},
            classTime: {type: String, required: true},
            classDay: {type: String, required: true},
            classTerm: {type: String, required: true},
            classDay: {type: String, required: true},
            classTerm: {type: String, required: true},
            
},{timestamps: true})

const ClassModel = mongoose.model("Classes",ClassSchema)
module.exports = ClassModel