const mongoose = require('mongoose');

const ClassCardSchema = new mongoose.Schema(
  {
    classRecord: [{ type: mongoose.Schema.Types.ObjectId }],
    student: { type: mongoose.Schema.Types.ObjectId },
    professor: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const ClassCardModel = mongoose.model('classCard', ClassCardSchema);
module.exports = ClassCardModel;
