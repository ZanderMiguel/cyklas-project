const mongoose = require('mongoose');

const ClassRecordSchema = new mongoose.Schema(
  {
    room: [{ type: mongoose.Schema.Types.ObjectId }],
    courseYrSec: [{ type: Array, required: true }],
    students: { type: Array },
    totalStudents: { type: Number },
    professor: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const ClassRecordModel = mongoose.model('classRecord', ClassRecordSchema);
module.exports = ClassRecordModel;
