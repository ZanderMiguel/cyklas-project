const mongoose = require('mongoose');

const ClassRecordSchema = new mongoose.Schema(
  {
    room: [{ type: mongoose.Schema.Types.ObjectId }],
    student: { type: Object, required: true },
    gradingSystem: {type: Object, required: true},
    professor: { type: Object, required: true },
  },
  { timestamps: true }
);
const ClassRecordModel = mongoose.model('classRecord', ClassRecordSchema);
module.exports = ClassRecordModel;
