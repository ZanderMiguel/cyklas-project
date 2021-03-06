const GradingSystemModel = require('../models/model-gradingSystem');

const createGradingSystem = async (req, res) => {
  try {
    const gradingSystem = new GradingSystemModel(req.body);
    await gradingSystem.save();
    console.log('Grading System created');
    return res.json(gradingSystem);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const updateGradingSystem = async (req, res) => {
  try {
    await GradingSystemModel.findByIdAndUpdate(req.body.gsID, req.body);
    console.log('Grading System Updated');
    return res.json({
      status: 'success',
      message: 'Grading System Updated!',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const deleteGradingSystem = async (req, res) => {
  try {
    await GradingSystemModel.findByIdAndDelete(req.body.gsID);
    console.log('Grading system deleted');
    return res.json({
      status: 'success',
      message: 'Grading System Updated',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayGradingSystem = async (req, res) => {
  try {
    const gradingSystem = GradingSystemModel.find({
      user: req.body.userID,
    }).sort({ createdAt: -1 });
    console.log('Grading System Displayed');
    return res.json(gradingSystem);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createGradingSystem,
  updateGradingSystem,
  deleteGradingSystem,
  displayGradingSystem,
};
