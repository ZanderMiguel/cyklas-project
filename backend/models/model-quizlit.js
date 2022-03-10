const mongoose = require('mongoose')

const QuizlitSchema = new mongoose.Schema({
    author: {type: Object, required: true},
    title: {type: String,required: true},
    questions: [{type: mongoose.Schema.Types.ObjectId}],
    quizType: {type: String, required: true},
    graded: {type: Boolean, required: true},
    rooms: {type: Array, required: true},

},{timestamps: true})
const QuizlitModel = mongoose.model('quizlit',QuizlitSchema)
module.exports = {QuizlitModel,QuizlitSchema}