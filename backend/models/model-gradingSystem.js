const mongoose = require('mongoose');

const GradingSystemSchema = new mongoose.Schema(
  {
    classification: { type: Array, required: true },
    rooms: [mongoose.Schema.Types.ObjectId],
    user: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const GradingSystemModel = mongoose.model(
  'gradingSystems',
  GradingSystemSchema
);
module.exports = GradingSystemModel;
