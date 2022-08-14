const AnswerModel = require('../models/model-answers');
const { QuestionModel } = require('../models/model-questions');
const { QuizlitModel } = require('../models/model-quizlit');
const { getSubmitted } = require('./activitySubmitsController');
const createAnswer = async (req, res) => {
  try {
    const answer = await AnswerModel.insertMany(req.body.answersPayload);
    return res.json(answer);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const displayAnswer = async (req, res) => {
  try {
    const answer = await AnswerModel.find({
      questions: req.body.questionID,
      answeredBy: req.body.answeredBy,
    });
    console.log('Answer Displayed');
    return res.json(answer);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const updateScore = async (req, res) => {
  try {
    await AnswerModel.findByIdAndUpdate(req.body.answerID, req.body);
    return res.json({
      status: 'success',
      message: 'score updated',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const displayAllAnswers = async (req, res) => {
  try {
    const questions = await QuestionModel.find({
      quizID: req.body.quizID.replace(':', ''),
    });
    const qIDs = questions.map((item) => item._id);
    const answers = await AnswerModel.find({
      questions: { $in: qIDs },
    });
    const quizlit = await QuizlitModel.findById(req.body.quizID);
    const submitted = await getSubmitted(req);
    console.log(req.body);
    return res.json({ answers, ...questions, quizlit, submitted });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const createGameAnswer = async (req, res) => {
  try {
    const answer = new AnswerModel(req.body);
    await answer.save();

    return res.json(answer);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createAnswer,
  displayAnswer,
  updateScore,
  displayAllAnswers,
  createGameAnswer,
};
