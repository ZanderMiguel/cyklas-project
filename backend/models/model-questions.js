const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    questionsContent: {type: String, required: true},
    answers: {type: Array, required: true},
    madia: {type: Buffer},
    answerType: {type:String, required: true},
    quizID: {type: mongoose.Schema.Types.ObjectId}
},{timestamps: true})

const QuestionModel = mongoose.model('questions',QuestionSchema)
module.exports = {QuestionModel,QuestionSchema}