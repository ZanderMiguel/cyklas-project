const ActivitySubmitsModel = require('../models/model-activitySubmits');
const { getRooms } = require('./roomsController');
const { getActivity } = require('./createActivityController');
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

const submitActivity = async (req, res) => {
  try {
    const { activityID, submittedBy, ...fields } = req.body;
    console.log(req.body);
    const submits = new ActivitySubmitsModel({
      activityID: mongoose.Types.ObjectId(activityID),
      ...fields,
      submittedBy: JSON.parse(req.body.submittedBy),
    });
    await submits.save();
    console.log('Activity Submitted');
    return res.json({
      status: 'success',
      message: 'Activity Submitted',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const getSubmittedActivity = async (req) => {
  const activity = await ActivitySubmitsModel.find({
    'submittedBy.userID': req.body.stdID,
  });
  return activity;
};
const getSubmitted = async (req) => {
  const activity = await ActivitySubmitsModel.find({
    activityID: req.body.activityID,
    'submittedBy.userID': req.body.stdID,
  });
  return activity;
};
const displaySubmittedActivity = async (req, res) => {
  try {
    const activity = await getSubmitted(req);
    console.log('activity found!');
    gfs.find().toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return 'No files available';
      }
      const myFile = [];

      files.forEach((item) => {
        activity.media[0].forEach((clientFile) => {
          if (item.filename.includes(clientFile)) {
            myFile.push({ file: item });
            console.log(item.filename, clientFile);
            gfs
              .openDownloadStream(item._id)
              .pipe(fs.createWriteStream(`./files/${item.filename}`));
          }
        });
      });

      return res.json({ activity, myFile });
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const collect = async (req) => {
  const rooms = await getRooms(req);
  const userID = req.body.userID;
  const roomIDs = rooms.map((item) => item._id.toString());
  const request = {
    body: { roomID: roomIDs },
  };
  const activities = await getActivity(request);
  const actIDs = activities.map((item) => item._id.toString());
  const actLen = await ActivitySubmitsModel.find({
    activityID: { $in: actIDs },
    'submittedBy.userID': userID,
  });
  console.log(actIDs);
  return { submittedActivities: actLen.length, allActs: actIDs.length };
};
const getAllActivities = async (req, res) => {
  try {
    const data = await collect(req);
    console.log(data);
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  submitActivity,
  displaySubmittedActivity,
  getAllActivities,
  getSubmittedActivity,
  getSubmitted,
};
