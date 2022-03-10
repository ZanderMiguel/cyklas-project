const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
    questions: {type: String, required: true},
    answers: {type: String, required: true},
    score: {type: Number,required: true}

},{timestamps: true})

const AnswerModel = mongoose.model('answers',AnswerSchema)
module.exports = {AnswerModel,AnswerSchema}