const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    RoomName: { type: String, required: true },
    Course: { type: String, required: true },
    ClassDays: { type: String, required: true },
    yearAndSection: { type: String, required: true },
    ClassTime: { type: String, required: true },
    members: [mongoose.Schema.Types.ObjectId],
  },
  { timestamps: true }
);

const RoomsModel = mongoose.model('Rooms', RoomsSchema);
module.exports = { RoomsModel, RoomsSchema };
