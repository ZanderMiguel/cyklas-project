const Activity = require( '../models/model-activity' );
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

const findActivity = async (req, res) => {
  try {
    const activity = await Activity.findById(req.body.activityID);
    console.log('activity found!');

    gfs.find().toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return 'No files available';
      }
      const myFile = [];

      files.forEach((item) => {
        activity.media.forEach((clientFile) => {
          if (clientFile === item.filename.split(`_split_`)[0]) {
            myFile.push( { file: item } );
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
    return res.json({
      status: 'error',
      message: error,
    });
  }
};
const downloadFileByClick = async ( req, res ) =>
{
  res.download(`./files/${req.params.file}`);
};
const previewFileByClick = async (req, res) => {
  return res.json('preview');
};

const deleteActivity = async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.body.id);
    console.log(req.body.id);
    return res.json('succesfully deleted activity');
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
const createActivityComment = async (req, res) => {
  try {
    const commentID = mongoose.Types.ObjectId();
    await Activity.updateMany(
      {
        _id: req.body.activityID,
      },
      {
        $push: { activityComments: [{ ...req.body.commentObj, commentID }] },
      }
    );
    return res.json('Activity Comment');
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayActivityComment = async (req, res) => {
  try {
    const comments = await Activity.findById(req.body.activityID).sort({
      createdAt: -1,
    });
    console.log('commented on an activity');
    return res.json(comments.activityComments);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const deleteController = async (req, res) => {
  try {
    const activity = await Activity.findById(req.body.activityID);
    activity?.activityComments?.forEach(async (item, index) => {
      if (item.commentID === req.body.commentID) {
        await Activityl.findByIdAndUpdate(req.body.activityID, {
          $pull: { activityComments: activity.activityComments[index] },
        });
      }
    });
    console.log('comment deleted');
    return res.json({ message: 'comment deleted', status: 'success' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createActivityController: createActivity,
  displayActivityController: displayActivity,
  deleteActivityController: deleteActivity,
  updateActivityController: updateActivity,
  findActivity,
  downloadFileByClick,
  previewFileByClick,
  createActivityComment,
  displayActivityComment,
  deleteController,
};
