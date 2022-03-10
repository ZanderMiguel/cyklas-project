const {QuizlitModel} = require('../models/model-quizlit')
const { findById } = require('../models/model-users')
const UserModel = require('../models/model-users')
const mongoose = require('mongoose')

const updateUser = async (userID,quizlit) => {
    const userQuiz = await UserModel.findById(userID)
    await UserModel.findByIdAndUpdate(userID,{quizlit:[...userQuiz.quizlit,quizlit]})
}
const createQuizlit =  async (req, res) => {
    try{
        const quizID = mongoose.Types.ObjectId();
        const newQuizlit = new QuizlitModel({_id:quizID,...req.body})
        await newQuizlit.save()
        updateUser(req.body.userID,quizID)
        return res.json({status: 'success', data: newQuizlit})
    }catch(err){
        console.log(err)
        return res.json({
            status: 'error',
            message: err
        })
    }
}
const updateQuizlit =  async (req, res) => {
    try{
        await QuizlitModel.findByIdAndUpdate(req.body.quizID,req.body)
        
        return res.json({status: 'success'})
    }catch(err){
        console.log(err)
        return res.json({
            status: 'error',
            message: err
        })
    }
}
const deleteQuizlit =  async (req, res) => {
    try{
        await QuizlitModel.findByIdAndDelete(req.body.quizID)
        
        return res.json({status: 'success'})
    }catch(err){
        console.log(err)
        return res.json({
            status: 'error',
            message: err
        })
    }
}

const findQuizlit =  async (req, res) => {
    try{
        const quiz = await QuizlitModel.findById(req.body.quizID)
        
        return res.json(quiz)
    }catch(err){
        console.log(err)
        return res.json({
            status: 'error',
            message: err
        })
    }
}
module.exports = {
    createQuizlitController: createQuizlit,
    updateQuizlitController: updateQuizlit,
    deleteQuizlitController: deleteQuizlit,
    findQuizlitController: findQuizlit
}