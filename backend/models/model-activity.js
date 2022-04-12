const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId },
    activityTopic: { type: String},
    activityTitle: { type: String, required: true },
    activityType: { type: String, required: true },
    activityPoints: { type: Number, required: true },
    activityDueDate: { type: Date },
    media: { type: Buffer },
    rooms: [mongoose.Schema.Types.ObjectId],
  },
  { timestamp: true }
);
const ActivityModel = mongoose.model('activities', ActivitySchema);
module.exports = ActivityModel;
