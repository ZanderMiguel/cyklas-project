const {RoomsModel} = require('../models/model-createRoom')
const User = require('../models/model-registration')
async function createRooms(req, res) {
    console.log(req.body)
    try{

        const addRooms = new RoomsModel({
            RoomName: req.body.RoomName,
            Course: req.body.Course,
            ClassDays: req.body.ClassDays,
            yearAndSection: req.body.yearAndSection,
            ClassTime: req.body.ClassTime,
            Terms: req.body.Terms,
            GradingSystem: req.body.GradingSystem,
        });
        const getRoom = await User.findById(req.body.id)
        
        await addRooms.save()
        await User.findByIdAndUpdate(req.body.id,{room: [...getRoom.room,addRooms]})
            console.log("Room Created")
            return res.json({
                status: 'success',
                message: 'Room Created!'
            })
    } catch (error){
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
        })
    } 
}

const displayRooms = async (req, res) => {
    try {
        const room = await RoomsModel.find().sort({ createdAt: -1 })
        console.log("room displayed!")
        return res.json(room)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

const deleteRooms = async (req, res) => {
    try {
        await RoomsModel.findByIdAndDelete(req.params.id)
        console.log(req.params.id)
        return res.json({ redirect: '/' })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

const updateRooms = async (req, res) => {
    try {
        await RoomsModel.findByIdAndUpdate(req.params.id, req.body)
        console.log('helicopter')
        return res.json({ redirect: '/' })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

module.exports = {
    createRoomController : createRooms,
    displayRoomController: displayRooms,
    deleteRoomController: deleteRooms,
    updateRoomController: updateRooms,
}