const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
  {
    questionsContent: { type: String, required: true },
    qAnswers: { type: Object },
    points: { type: String, required: true },
    answers: { type: Array },
    media: { type: String },
    correctAnswer: { type: String },
    answerType: { type: String, required: true },
    quizID: { type: mongoose.Schema.Types.ObjectId },
    timeLimit: { type: String },
    instruction: { type: String },
  },
  { timestamps: true }
);

const QuestionModel = mongoose.model('questions', QuestionSchema);
module.exports = { QuestionModel, QuestionSchema };
