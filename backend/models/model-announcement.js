const mongoose = require('mongoose');
const AnnouncementSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    author: { type: Object, required: true },
    content: { type: String, required: true },
    media: { type: Buffer },
    rooms: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true }
);
const AnnouncementModel = mongoose.model('announcement', AnnouncementSchema);
module.exports = { AnnouncementModel, AnnouncementSchema };
