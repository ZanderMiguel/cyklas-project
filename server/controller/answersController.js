const AnswerModel = require('../models/model-answers');

const createAnswer = async (req, res) => {
  try {
    const answer = new AnswerModel(req.body);
    await answer.save();
    return res.json(answer);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const displayAnswer = async (req, res) => {
  try {
    const answer = await AnswerModel.find({ questions: req.body.questionID });
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
module.exports = { createAnswer, displayAnswer, updateScore };
