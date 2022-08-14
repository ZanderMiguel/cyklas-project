const mongoose = require('mongoose');
const RoomRequestSchema = mongoose.Schema(
  {
    requests: { type: Object, required: true, unique: true },
    room: { type: mongoose.Schema.Types.ObjectId, required: true },
    hostID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const RoomRequestModel = mongoose.model('RoomRequest', RoomRequestSchema);
module.exports = RoomRequestModel;
