const mongoose = require('mongoose');

const ClassCardSchema = new mongoose.Schema(
  {
    classRecord: [{ type: Object }],
    student: { type: Object },
    professor: { type: Object },
    overall: { type: String },
  },
  { timestamps: true }
);
const ClassCardModel = mongoose.model('classCard', ClassCardSchema);
module.exports = ClassCardModel;
