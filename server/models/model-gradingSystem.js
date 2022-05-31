const mongoose = require('mongoose');

const GradingSystemSchema = new mongoose.Schema(
  {
    GradingName: { type: String, required: true },
    Category: { type: Array, required: true },
    rooms: [mongoose.Schema.Types.ObjectId],
    userID: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const GradingSystemModel = mongoose.model(
  'gradingSystems',
  GradingSystemSchema
);
module.exports = GradingSystemModel;
