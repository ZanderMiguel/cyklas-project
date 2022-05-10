const Activity = require('../models/model-activity');
const mongoose = require('mongoose')
const fs = require('fs')
require('dotenv').config();
let gfs
const openDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const conn = mongoose.createConnection(process.env.MONGODB_URI);
  conn.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: 'uploads',
    })
  })
}
openDB()
async function createActivity(req, res) {
  try {
    const addActivity = new Activity(req.body);

    await addActivity.save();
    console.log('Done!');
    return res.json({
      status: 'success',
      message: 'Activity Posted!',
    });
  } catch (error) {
    console.log('Something went wrong!' + error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
}

const displayActivity = async (req, res) => {
  try {
    const activity = await Activity.find({
      rooms: req.body.roomID.replace(':', ''),
    }).sort({ createdAt: -1 });
    console.log('activity posted!');
    return res.json(activity);
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};
const findFile = async (filename) => {
  const myFiles = []



}
const findActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.body.activityID);
    console.log('activity found!');



    gfs.find().toArray((err, files) => {

      if (!files[0] || files.length === 0) {
        return "No files available"
      }
      const myFile = []

      files.forEach((item) => {
        activity.media.forEach(clientFile => {
          if (clientFile === item.filename.split(`_split_`)[0]) {
            myFile.push({ file: item })
            gfs.openDownloadStream(item._id).
              pipe(fs.createWriteStream('./outputFile'));
          }
        })


      })
      return res.json({ activity, myFile });
    });

  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }


};
const deleteActivity = async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    return res.json({ redirect: '/' });
  } catch (error) {
    console.log('Something went wrong!');
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

const updateActivity = async (req, res) => {
  try {
    await Activity.findByIdAndUpdate(req.params.id, req.body);
    console.log('helicopter');
    return res.json({ redirect: '/' });
  } catch (error) {
    console.log('Something went wrong!');
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

const submitActivity = async (req, res) => {
  try {
    return res.json('Success');
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};

module.exports = {
  createActivityController: createActivity,
  displayActivityController: displayActivity,
  deleteActivityController: deleteActivity,
  updateActivityController: updateActivity,
  findActivity,
  submitActivity,
};
