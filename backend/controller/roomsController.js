const Rooms = require('../models/model-createRoom')

async function createRooms(req, res) {
    try{

        const addRooms = new Rooms({
            RoomName: req.body.RoomName,
            Course: req.body.Course,
            ClassDays: req.body.ClassDays,
            YearsAndSection: req.body.YearsAndSection,
            ClassTime: req.body.ClassTime,
            Terms: req.body.Terms,
            GradingSystem: req.body.GradingSystem,
        });

        await addRooms.save()
            console.log("Done!")
            return res.json({
                status: 'success',
                message: 'Activity Posted!'
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
        const room = await Rooms.find().sort({ createdAt: -1 })
        console.log("activity posted!")
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
        await Rooms.findByIdAndDelete(req.params.id)
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
        await Rooms.findByIdAndUpdate(req.params.id, req.body)
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