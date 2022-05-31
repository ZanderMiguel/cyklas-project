const { QuizlitModel } = require('../models/model-quizlit');
const { AnnouncementModel } = require('../models/model-announcement');
const { RoomsModel } = require('../models/model-createRoom');
const mongoose = require('mongoose');
const { QuestionModel } = require('../models/model-questions');
const _ = require('lodash');
const updateUserAndRoom = async (quizlit, roomID) => {
  try {
    await RoomsModel.updateMany(
      { _id: { $in: roomID } },
      { $push: { quizlit: quizlit } },
      { multi: true }
    );
  } catch (error) {
    console.log(error);
  }
};

const createQuizlit = async (req, res) => {
  try {
    const quizID = mongoose.Types.ObjectId();
    const announceID = mongoose.Types.ObjectId();
    const newQuizlit = new QuizlitModel({ _id: quizID, ...req.body });
    const newAnnounce = new AnnouncementModel({
      _id: announceID,
      content: { quizID },
      author: req.body.author,
      ...req.body,
    });
    await newQuizlit.save();
    if (req.body.type) await newAnnounce.save();
    updateUserAndRoom(quizID, req.body.rooms);
    return res.json({ status: 'success', data: quizID });
  } catch (err) {
    console.log(err);
    return res.json({
      status: 'error',
      message: err,
    });
  }
};
const updateQuizlit = async (req, res) => {
  try {
    await QuizlitModel.findByIdAndUpdate(req.body.quizID, req.body);

    return res.json({ status: 'success' });
  } catch (err) {
    console.log(err);
    return res.json({
      status: 'error',
      message: err,
    });
  }
};

const deleteQuizFromUserAndRoom = async (userID, quizID) => {
  try {
    await RoomsModel.updateMany(
      {},
      { $pull: { quizlit: { $in: quizID } } },
      { multi: true }
    );
  } catch (error) {
    console.log(error);
  }
};
const deleteQuizlit = async (req, res) => {
  try {
    await QuizlitModel.findByIdAndDelete(req.body.quizID);
    deleteQuizFromUserAndRoom(req.body.userID, req.body.quizID);
    return res.json({ status: 'success' });
  } catch (err) {
    console.log(err);
    return res.json({
      status: 'error',
      message: err,
    });
  }
};

const findQuizlit = async (req, res) => {
  try {
    const quiz = await QuizlitModel.findById(req.body.quizID.replace(':', ''));
    return res.json(quiz);
  } catch (err) {
    console.log(err, 'bobo');
    return res.json({
      status: 'error',
      message: err,
    });
  }
};
const displayQuizlitOnQuizlit = async (req, res) => {
  try {
    const quizList = await QuizlitModel.find({
      'author.userID': req.body.userID,
    }).sort({
      createdAt: -1,
    });
    return res.json(quizList);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayQuizlitOnRoom = async (req, res) => {
  try {
    const quizList = await QuizlitModel.find({ rooms: req.body.rooms }).sort({
      createdAt: -1,
    });
    return res.json(quizList);
  } catch (error) {
    console.log(error);
    return error;
  }
};
const displayQuizlitOfStudents = async (req, res) => {
  try {
    const quizlits = await QuizlitModel.find({
      students: { $elemMatch: { $eq: req.body.stdID } },
    });
    console.log('Student Quizlits Displayed');
    const qIDs = quizlits.map((item) => item._id);
    const questions = await QuestionModel.find({
      quizID: { $in: qIDs },
    });
    const totalPoints = questions.map((item) => {
      const map = {};
      map[item.quizID] = map[item.quizID]
        ? [
            ...map[item.quizID],
            item.points.replace(' point', '').replace(' points', ''),
          ]
        : [item.points.replace(' point', '').replace(' points', '')];

      return map;
    });

    const storePoints = {};
    totalPoints.forEach((item) => {
      storePoints[Object.entries(item)[0][0]] = storePoints[
        Object.entries(item)[0][0]
      ]
        ? [
            ...storePoints[Object.entries(item)[0][0]],
            parseInt(Object.entries(item)[0][1][0]),
          ]
        : [parseInt(Object.entries(item)[0][1][0])];
    });

    return res.json({ quizlits, storePoints });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createQuizlitController: createQuizlit,
  updateQuizlitController: updateQuizlit,
  deleteQuizlitController: deleteQuizlit,
  findQuizlitController: findQuizlit,
  displayQuizlitOnQuizlit,
  displayQuizlitOnRoom,
  displayQuizlitOfStudents,
};
