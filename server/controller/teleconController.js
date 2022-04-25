const {v4: newRoomId} = require('uuid') 
const newTeleRoomId = (req,res) => {
    
    return res.json({ROOM_ID : newRoomId()})
}
module.exports = {teleController: newTeleRoomId}
