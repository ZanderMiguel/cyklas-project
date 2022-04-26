const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
  {
    questions: { type: mongoose.Schema.Types.ObjectId },
    answers: { type: String },
    score: { type: Number },
    activity: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

const AnswerModel = mongoose.model('answers', AnswerSchema);
module.exports = AnswerModel;
