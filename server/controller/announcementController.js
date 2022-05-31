const { AnnouncementModel } = require('../models/model-announcement');
const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();
let gfs;
const openDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI ||
      'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const conn = mongoose.createConnection(
    process.env.MONGODB_URI ||
      'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority'
  );
  conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'uploads',
    });
  });
};
openDB();
async function createAnnouncement(req, res) {
  try {
    const announceID = mongoose.Types.ObjectId();
    const addAnnouncement = new AnnouncementModel({
      _id: announceID,
      ...req.body,
    });
    await addAnnouncement.save();
    console.log('Done!');
    return res.json({
      status: 'success',
      message: 'Announcement Posted!',
    });
  } catch (error) {
    console.log('Something went wrong!' + error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
}

const displayAnnounce = async (req, res) => {
  try {
    const announce = await AnnouncementModel.find({
      rooms: req.body.rooms,
    }).sort({ createdAt: -1 });
    console.log('announcement posted!');
    return res.json(announce);
  } catch (error) {
    console.log('Something went wrong!');
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

const deleteAnnounce = async (req, res) => {
  try {
    await AnnouncementModel.findByIdAndDelete(req.body.announceID);
    console.log('deleted');
    return res.json({ status: 'Deleted' });
  } catch (error) {
    console.log('Something went wrong!');
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

const updateAnnounce = async (req, res) => {
  try {
    await AnnouncementModel.findByIdAndUpdate(req.body.announceID, req.body);
    console.log('Modified announcement');
    return res.json({ redirect: '/' });
  } catch (error) {
    console.log('Something went wrong!');
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

module.exports = {
  createAnnounce: createAnnouncement,
  displayAnnounce: displayAnnounce,
  deleteAnnounce: deleteAnnounce,
  updateAnnounce: updateAnnounce,
};
