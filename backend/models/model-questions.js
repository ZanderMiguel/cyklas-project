const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema(
  {
    questionsContent: { type: String, required: true },
    answers: { type: Array },
    madia: { type: Buffer },
    answerType: { type: String, required: true },
    quizID: { type: mongoose.Schema.Types.ObjectId },
    timeLimit: {type: String}
  },
  { timestamps: true }
);

const QuestionModel = mongoose.model('questions', QuestionSchema);
module.exports = { QuestionModel, QuestionSchema };
