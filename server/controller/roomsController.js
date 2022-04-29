const { RoomsModel } = require('../models/model-createRoom');
const User = require('../models/model-users');
const mongoose = require('mongoose');

async function createRooms(req, res) {
  try {
    const id = mongoose.Types.ObjectId();

    const addRooms = new RoomsModel({ _id: id, ...req.body });
    await addRooms.save();
    console.log('Room Created');
    return res.json({
      status: 'success',
      message: 'Room Created!',
    });
  } catch (error) {
    console.log('Something went wrong!' + error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
}

const displayRooms = async (req, res) => {
  try {
    const room = await RoomsModel.find({
      members: { $elemMatch: { $eq: req.body.userID } },
    }).sort({ createdAt: -1 });
    console.log('room displayed!');
    return res.json(room);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const findRoom = async (req, res) => {
  try {
    const room = await RoomsModel.findById(req.body.roomID);
    return res.json(room);
  } catch (err) {
    console.log(err);
    return res.json({ status: error, message: err });
  }
};
const deleteRooms = async (req, res) => {
  try {
    await RoomsModel.findByIdAndDelete(req.body.roomID);
    return res.json({ status: 'success', message: 'room deleted' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const updateRooms = async (req, res) => {
  try {
    await RoomsModel.findByIdAndUpdate(req.body.roomID, req.body);

    return res.json({ status: 'success', message: 'room updated' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const getMembersData = async(req,res)=>{
  try{
    const members = await User.find({
      _id: {$in: req.body.members}
    })
    return res.json(members)
  }catch(error){
    console.log(error)
    return res.json(error)
  }
}
module.exports = {
  createRoomController: createRooms,
  displayRoomController: displayRooms,
  deleteRoomController: deleteRooms,
  updateRoomController: updateRooms,
  findRoom,getMembersData
};