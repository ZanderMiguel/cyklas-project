const {QuizlitModel} = require('../models/model-quizlit')   
const UserModel = require('../models/model-users')
const {RoomsModel} = require('../models/model-createRoom')
const mongoose = require('mongoose')

const updateUserAndRoom = async (userID,quizlit,roomID) => {
    try{
    const userQuiz = await UserModel.findById(userID)
    await UserModel.findByIdAndUpdate(userID,{quizlit:[...userQuiz.quizlit,quizlit]})
    roomID.forEach(async(element) => {
        const roomQuiz = await RoomsModel.findById(element)
        await RoomsModel.findByIdAndUpdate(element,{quizlit: [...roomQuiz.quizlit,quizlit]})
    });
    }catch(error){
        console.log(error)
    }
}

const createQuizlit =  async (req, res) => {
    try{
        const quizID = mongoose.Types.ObjectId();
        const newQuizlit = new QuizlitModel({_id:quizID,...req.body})
        await newQuizlit.save()
        updateUserAndRoom(req.body.userID,quizID,req.body.rooms)
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

const deleteQuizFromUserAndRoom = async(userID,quizID,roomID) => {
    try{
    const userQuiz = await UserModel.findById(userID)
    
    const quizDeletedFromUser = userQuiz.quizlit.filter((item)=>{
        console.log(!item.toString().includes(quizID))
        return !item.toString().includes(quizID)})
        
    await UserModel.findByIdAndUpdate(userID,{quizlit: quizDeletedFromUser})
    roomID.forEach(async(element)=>{
        const roomQuiz = await RoomsModel.findById(element)
        
        await RoomsModel.updateMany({quizlit: mongoose.Types.ObjectId(element)},{quizlit: roomQuiz.quizlit.splice(roomQuiz.quizlit.indexOf(mongoose.Types.ObjectId(element)),1)})
    })
    }catch(error){
        console.log(error)
    }
}
const deleteQuizlit =  async (req, res) => {
    try{
        await QuizlitModel.findByIdAndDelete(req.body.quizID)
        deleteQuizFromUserAndRoom(req.body.userID,req.body.quizID,req.body.roomID)
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