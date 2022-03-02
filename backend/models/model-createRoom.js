const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    RoomName: { type: String, required: true },
    Course: { type: String, required: true },
    ClassDays: { type: String, required: true },
    yearAndSection: { type: String, required: true },
    ClassTime: { type: String, required: true },
    Terms: { type: String, required: true },
    GradingSystem: { type: String, required: true },
    PostID: [mongoose.Schema.Types.ObjectId],
    activityID: [mongoose.Schema.Types.ObjectId],
    userID: [mongoose.Schema.Types.ObjectId],
    groupID: [mongoose.Schema.Types.ObjectId]
  },
  { timestamps: true }
);

const RoomsModel = mongoose.model('Rooms', RoomsSchema);
module.exports = {RoomsModel,RoomsSchema};
