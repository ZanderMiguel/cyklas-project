const { QuestionModel } = require('../models/model-questions')
const { QuizlitModel } = require('../models/model-quizlit')
const mongoose = require('mongoose')

const updateQuizlit = async (quizID, question) => {
    try {
        await QuizlitModel.updateMany({ _id: quizID }, { $push: { questions: question } })
    } catch (error) {
        console.log(error)
    }
}

const createQuestion = async (req, res) => {
    try {
        const qID = mongoose.Types.ObjectId();
        const newQuestion = new QuestionModel({ _id: qID, ...req.body })
        updateQuizlit(req.body.quizID, qID)
        await newQuestion.save()
        return res.json({
            status: 'success',
            message: newQuestion
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 'error',
            message: error
        })
    }
}
const updateQuestion = async (req, res) => {
    try {
        await QuestionModel.findByIdAndUpdate(req.body.qID, req.body)

        return res.json({
            message: 'success',

        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 'error',
            message: error
        })
    }
}
const deleteQuestion = async (req, res) => {
    try {
        await QuestionModel.findByIdAndDelete(req.body.qID)
        await QuizlitModel.updateMany({ _id: req.body.quizID }, { $pull: { questions: req.body.qID } })

        return res.json({
            message: 'success'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            status: 'error',
            message: error
        })
    }
}

const findQuestions = async (req, res) => {
    try {
        const questions = await QuestionModel.find({ quizID: req.body.quizID })
        return res.json(questions)
    }catch(error){
        console.log(error)
        return res.json({
            status: 'error',
            message: error
        })
    }
}

module.exports = {
    createQuestionController: createQuestion,
    updateQuestionController: updateQuestion,
    deleteQuestionController: deleteQuestion,
    findQuestionController: findQuestions
}