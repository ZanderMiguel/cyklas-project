const RoomRequestModel = require('../models/model-roomRequest')
const { RoomsModel } = require('../models/model-createRoom')
const newRequests = async (req, res) => {
    try {
        const room = await RoomsModel.findById(req.body.roomID)
        if (!room.members.includes(req.body.userID)) {
            const requests = new RoomRequestModel({ hostID: room.members[0], room: room._id, requests: { userImage:req.body.userImage,RoomName: room.RoomName, userName:req.body.userName,studentID: req.body.userID } })
            await requests.save()
            console.log('request to join success')
            return res.json({ message: 'Your request is sent. Please come again later'})

        }
        if (room.members.includes(req.body.userID)) {
            return res.json({ message: 'Your request is sent. Please come again later', room })

        }
    } catch (error) {
        return res.json({ message: 'Your request is sent. Please come again later',error})
    }
}
const declineRequest = async (req, res) => {
    try {

        await RoomRequestModel.findByIdAndDelete(req.body.reqID)
        return res.json({
            status: 'success',
            message: 'Student Declined'
        })
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}
const acceptRequest = async (req, res) => {
    try {
        await RoomsModel.updateMany({ _id: req.body.roomID }, { $push: { members: req.body.memberID } })
        await RoomRequestModel.findByIdAndDelete(req.body.reqID)
        const requests = await RoomRequestModel.find({ hostID: req.body.userID }).sort({ createdAt: -1 })

        return res.json(requests.length === 0 ? null:requests)
    } catch (error) {
        console.log(error)
        return res.json(error)
    }
}
const displayRequests = async (req, res) => {
    try {
        const requests = await RoomRequestModel.find({ hostID: req.body.userID }).sort({ createdAt: -1 })
        return res.json(requests)
    } catch (error) {

        console.log(error)
        return res.json(error)
    }
}
module.exports = { addMembers: newRequests, declineRequest, acceptRequest, displayRequests }