const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema(
  {
    RoomName: { type: String, required: true },
    Course: { type: String, required: true },
    ClassDays: { type: String, required: true },
    yearAndSection: { type: String, required: true },
    ClassTime: { type: String, required: true },
    Terms: { type: String, required: true },
    GradingSystem: { type: String, required: true },
  },
  { timestamps: true }
);

const RoomsModel = mongoose.model('Rooms', RoomsSchema);
module.exports = RoomsModel;
