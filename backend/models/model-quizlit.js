const mongoose = require('mongoose')

const QuizlitSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String,required: true},
    questions: [{type: mongoose.Schema.Types.ObjectId}],
    quizType: {type: String, required: true},
    graded: {type: Boolean, required: true},
    rooms: {type: Array, required: true},

},{timestamps: true})
const QuizlitModel = mongoose.model('quizlit',QuizlitSchema)
module.exports = {QuizlitModel,QuizlitSchema}