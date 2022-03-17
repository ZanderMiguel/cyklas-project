const { RoomsModel } = require('../models/model-createRoom');
const User = require('../models/model-users');
const mongoose = require('mongoose');

async function createRooms(req, res) {
  try {
    const id = mongoose.Types.ObjectId();

    const addRooms = new RoomsModel({_id: id,...req.body});
    await addRooms.save();
    await User.updateMany({_id: req.body.userID},{$push: {rooms: id}})
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
    const room = await RoomsModel.find({ members: {$elemMatch: {$eq: req.body.userID}} })
    .sort({ createdAt: -1 });

    console.log('room displayed!');
    return res.json(room);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const deleteRooms = async (req, res) => {
  try {
    await RoomsModel.findByIdAndDelete(req.body.roomID);
    await User.updateMany({_id: req.body.userID},{$pull: {rooms: req.body.roomID}})
    return res.json({ status: 'success', message: 'room deleted' });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

const updateRooms = async (req, res) => {
  try {
    await RoomsModel.findByIdAndUpdate(req.body.roomID, req.body);
    
    return res.json({ status: 'success', message: 'room updated'});
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

module.exports = {
  createRoomController: createRooms,
  displayRoomController: displayRooms,
  deleteRoomController: deleteRooms,
  updateRoomController: updateRooms,
};
