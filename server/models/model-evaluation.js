const mongoose = require('mongoose');

const EvaluationSchema = new mongoose.Schema(
  {
    classCard: { type: Object },
    rating: { type: String, required: true },
    student: { type: mongoose.Schema.Types.ObjectId },
    professor: { type: Object },
  },
  { timestamps: true }
);

const EvaluationModel = mongoose.model('evaluation', EvaluationSchema);
module.exports = EvaluationModel;
