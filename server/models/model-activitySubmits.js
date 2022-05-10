const mongoose = require('mongoose');
const ActivitySubmitsSchema = new mongoose.Schema(
  {
    activityID: { type: mongoose.Schema.Types.ObjectId },
    media: [{ type: String, required: true }],
    submittedBy: { type: Object, required: true },
    activityStatus: { type: String, required: true },
    stdID: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const ActivitySubmitsModel = mongoose.model(
  'activitySubmits',
  ActivitySubmitsSchema
);
module.exports = ActivitySubmitsModel;
