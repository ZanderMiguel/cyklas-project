const { QuestionModel } = require('../models/model-questions');


const createQuestion = async (req, res) => {
  try {
    const newQuestion = await QuestionModel.insertMany(req.body.questionPayload);
    console.log({
      status: 'success',
      message: newQuestion,
      file: req.file
    })
    return res.json({
      status: 'success',
      message: newQuestion,
      file: req.file
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};
const updateQuestion = async (req, res) => {
  try {
    await QuestionModel.findByIdAndUpdate(req.body.qID, req.body);

    return res.json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};
const deleteQuestion = async (req, res) => {
  try {
    await QuestionModel.findByIdAndDelete(req.body.qID);
    return res.json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

const findQuestions = async (req, res) => {
  try {
    const questions = await QuestionModel.find({
      quizID: req.body.quizID,
    });
    return res.json(questions);
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};

module.exports = {
  createQuestionController: createQuestion,
  updateQuestionController: updateQuestion,
  deleteQuestionController: deleteQuestion,
  findQuestionController: findQuestions, 
};
