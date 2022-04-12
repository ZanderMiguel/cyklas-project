const mongoose = require('mongoose');

const createActivitySchema = new mongoose.Schema(
  {
    activityTopic: { type: String},
    activityTitle: { type: String, required: true },
    terms: { type: String },
    activityType: { type: String, required: true },
    activityPoints: { type: String, required: true },
    activityDueDate: { type: Date, required: true },
    activityInstruction: { type: String, required: true },
  },
  { timestamps: true }
);

const createActivityModel = mongoose.model(
  'Create Activity',
  createActivitySchema
);
module.exports = createActivityModel;
