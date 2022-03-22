const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema(
  {
    classCard: { type: mongoose.Schema.Types.ObjectId },
    rating: { type: Number, required: true },
    student: { type: mongoose.Schema.Types.ObjectId },
    professor: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);

const EvaluationModel = mongoose.model('evaluation', EvaluationSchema);
module.exports = EvaluationModel;
