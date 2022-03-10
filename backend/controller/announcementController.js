const {AnnouncementModel } = require("../models/model-announcement");

async function createAnnouncement(req, res) {
    try{

        const addAnnouncement = new AnnouncementModel(req.body);
        await addAnnouncement.save()
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
        const announce = await AnnouncementModel.find().sort({ createdAt: -1 })
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
      await AnnouncementModel.findByIdAndDelete(req.body.id);
      console.log(req.body.id);
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
        await AnnouncementModel.findByIdAndUpdate(req.body.id, req.body)
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