const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema(
  {
    questions: { type: mongoose.Schema.Types.ObjectId },
    answers: { type: String },
    score: { type: Number, required: true },
    activity: { type: mongoose.Schema.Types.ObjectId },
    media: { type: Buffer },
  },
  { timestamps: true }
);

const AnswerModel = mongoose.model('answers', AnswerSchema);
module.exports = AnswerModel;
