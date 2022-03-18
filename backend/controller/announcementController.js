const {AnnouncementModel } = require("../models/model-announcement");
const {RoomsModel} = require('../models/model-createRoom')
const mongoose = require('mongoose')
async function createAnnouncement(req, res) {
    try{
        const announceID = mongoose.Types.ObjectId();
        const addAnnouncement = new AnnouncementModel({_id:announceID,...req.body});
        await addAnnouncement.save()
        await RoomsModel.updateMany({_id: req.body.rooms},{$push: {Post: announceID}})
            console.log("Done!")
            return res.json({
                status: 'success',
                message: 'Announcement Posted!'
            })
    } catch (error){
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
        })
    } 
};

const displayAnnounce = async (req, res) => {
    try {
        const announce = await AnnouncementModel.find({rooms: req.body.rooms}).sort({ createdAt: -1 })
        console.log("announcement posted!")
        return res.json(announce)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
};

const deleteAnnounce = async (req, res) => {
    try {
      await AnnouncementModel.findByIdAndDelete(req.body.announceID);
      await RoomsModel.updateMany({_id: req.body.rooms},{$pull: {Post: req.body.announceID}})
      
      return res.json({ redirect: '/' });
    } catch (error) {
      console.log('Something went wrong!');
      return res.json({
        status: 'error',
        message: error,
      });
    }
  };

  const updateAnnounce = async (req, res) => {
    try {
        await AnnouncementModel.findByIdAndUpdate(req.body.announceID, req.body)
        console.log('Modified announcement')
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
    createAnnounce: createAnnouncement,
    displayAnnounce: displayAnnounce,
    deleteAnnounce: deleteAnnounce,
    updateAnnounce: updateAnnounce,
}