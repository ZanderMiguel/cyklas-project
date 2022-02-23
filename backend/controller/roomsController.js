const {RoomsModel: Rooms } = require('../models/model-createRoom')
const User = require('../models/model-registration')


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

        const getRoom = await User.findById(req.body.id)
        console.log()
        await addRooms.save()
        await User.findByIdAndUpdate(req.body.id,{room: getRoom.room !== null ? [...getRoom.room,addRooms] : [addRooms]})
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
        console.log("Something went wrong!" , error)
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

const deleteRooms = async (req, res) => {
    try {
        const getRoom = await User.findById(req.body.id)
        await Rooms.findByIdAndDelete(req.params.id)
        //console.log(getRoom.room)
        const deleted = getRoom.room.filter((item,index,array)=>{
            
            return req.params.id !== item._id.toString()
        })
        console.log(deleted)
        await User.findByIdAndUpdate(req.body.id,{room: deleted.length > 0 ? [...deleted]: null})
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