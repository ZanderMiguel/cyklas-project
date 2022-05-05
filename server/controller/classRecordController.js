const ClassRecordModel = require('../models/model-classRecords');

const createClassRecord = async (req, res) => {
  try {
    const classRecord = new ClassRecordModel(req.body);
    classRecord.save();
    console.log('Class Record Created');
    return res.json(classRecord);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const deleteClassRecord = async (req, res) => {
  try {
    await ClassRecordModel.findByIdAndDelete(req.body.crID);
    console.log('Class Record Deleted');
    return res.json({
      status: 'success',
      message: 'Class Record Deleted',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const updateClassRecord = async (req, res) => {
  try {
    await ClassRecordModel.findByIdAndUpdate(req.body.crID, req.body);
    console.log('Class Record Updated');
    return res.json({ status: 'success', message: 'Class Record Updated' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayClassRecord = async (req, res) => {
  try {
    const classRecord = await ClassRecordModel.find({
      "professor.profID": req.body.userID,
      room: { $elemMatch: { $eq: req.body.roomID } },
    });
    console.log('Class Record Dislayed');
    return res.json(classRecord.length > 0 ? classRecord : false);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createClassRecord,
  deleteClassRecord,
  updateClassRecord,
  displayClassRecord,
};
