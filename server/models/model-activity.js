const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema(
  {
    author: { type: Object, required: true },
    activityTopic: { type: String },
    activityTitle: { type: String, required: true },
    activityType: { type: String, required: true },
    activityPoints: { type: Number, required: true },
    activityDueDate: { type: Date },
    activityInstruction: { type: Object },
    media: [{ type: String }],
    rooms: [mongoose.Schema.Types.ObjectId],
  },
  { timestamp: true }
);
const ActivityModel = mongoose.model('activities', ActivitySchema);
module.exports = ActivityModel;
