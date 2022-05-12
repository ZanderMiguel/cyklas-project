const ActivitySubmitsModel = require('../models/model-activitySubmits');
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
const displaySubmittedActivity = async (req, res) => {
  try {
    const activity = await ActivitySubmitsModel.find({
      activityID: req.body.activityID,
      'submittedBy.userID': req.body.stdID,
    });
    console.log('activity found!');
    gfs.find().toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return 'No files available';
      }
      const myFile = [];

      files.forEach((item) => {
        activity?.media?.[0].forEach((clientFile) => {
          if (
            clientFile.replace(' ', '') ===
            item.filename.split(`_split_`)[0].replace(' ', '')
          ) {
            myFile.push({ file: item });
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
module.exports = {
  submitActivity,
  displaySubmittedActivity,
};
