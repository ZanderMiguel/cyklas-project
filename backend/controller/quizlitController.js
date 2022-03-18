const {QuizlitModel} = require('../models/model-quizlit')   
const UserModel = require('../models/model-users')
const {RoomsModel} = require('../models/model-createRoom')
const mongoose = require('mongoose')

const updateUserAndRoom = async (userID,quizlit,roomID) => {
    try{
    
    await UserModel.updateMany({_id: userID},{$push : {quizlit: quizlit}})
    await RoomsModel.updateMany({_id: {$in: roomID}},{$push: {quizlit: quizlit}},{multi: true})
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

const deleteQuizFromUserAndRoom = async(userID,quizID) => {
    try{
   
    await UserModel.updateMany({},{$pull: {quizlit: {$in: quizID}}},{multi: true})
    await RoomsModel.updateMany({},{$pull:{quizlit: {$in : quizID}}},{multi: true})

    }catch(error){
        console.log(error)
    }
}
const deleteQuizlit =  async (req, res) => {
    try{
        await QuizlitModel.findByIdAndDelete(req.body.quizID)
        deleteQuizFromUserAndRoom(req.body.userID,req.body.quizID)
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
const displayQuizlitOnQuizlit = async (req,res) => {
    try{
        const quizList = await QuizlitModel.find({userID: req.body.userID}).sort({createdAt: -1})
        return res.json(quizList)
    }catch(error){
        console.log(error)
        return res.json(error)
    }
}
const displayQuizlitOnRoom = async (req,res) => {
    try{
        const quizList = await QuizlitModel.find({rooms: req.body.rooms}).sort({createdAt: -1})
        return res.json(quizList)
    }catch(error){
        console.log(error)
        return(error)

    }
}
module.exports = {
    createQuizlitController: createQuizlit,
    updateQuizlitController: updateQuizlit,
    deleteQuizlitController: deleteQuizlit,
    findQuizlitController: findQuizlit,
    displayQuizlitOnQuizlit,displayQuizlitOnRoom
}