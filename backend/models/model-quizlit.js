const mongoose = require('mongoose');

const QuizlitSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    author: { type: Object, required: true },
    title: { type: String, required: true },
    quizType: { type: String, required: true },
    graded: { type: Boolean, required: true },
    rooms: { type: Array},
  },
  { timestamps: true }
);
const QuizlitModel = mongoose.model('quizlit', QuizlitSchema);
module.exports = { QuizlitModel, QuizlitSchema };
