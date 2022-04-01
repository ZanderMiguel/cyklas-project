const RoomRequestModel = require('../models/model-roomRequest')
const {RoomsModel} = require('../models/model-createRoom')
const addMembers = async(req,res) => {
    try{
      const requests = new RoomRequestModel(req.body)
      await requests.save()
      return res.json(requests)
    }catch(error){
      console.log(error)
      return res.json(error)
    }
  }
const declineRequest = async(req,res) => {
    try{
        
        await RoomRequestModel.findByIdAndDelete(req.body.reqID)
        return res.json({
            status: 'success',
            message: 'Student Declined'
        })
    }catch(error){
        console.log(error)
        return res.json(error)
    }
}
const acceptRequest = async(req,res) => {
    try{
        await RoomsModel.updateMany({_id: req.body.room.roomID  },{$push: {members: req.body.requests.memberID}})
        await RoomRequestModel.findByIdAndDelete(req.body.reqID)
        return res.json({
            status: 'success',
            message: 'Student Accepted'
        })
    }catch(error){
        console.log(error)
        return res.json(error)
    }
}
const displayRequests = async(req,res) => {
    try{
        const requests = await RoomRequestModel.find({user: req.body.userID}).sort({createdAt: -1})
        return res.json(requests)
    }catch(error){

        console.log(error)
        return res.json(error)
    }
}
  module.exports = { addMembers,declineRequest,acceptRequest,displayRequests }