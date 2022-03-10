const {CommentModel} = require("../models/model-comments");
const {AnnouncementModel} = require("../models/model-announcement");
const mongoose = require('mongoose');

async function createComment(req, res) {
    try{

        const id = mongoose.Types.ObjectId();
        const addComment = new CommentModel({_id: id, ...req.body});
        const getComment = await AnnouncementModel.findById(req.body.announcement);
        await addComment.save()
        await AnnouncementModel.findByIdAndUpdate(req.body.announcement, {
            comments: [...getComment.comments, id],
          });
            console.log("Done!")
            return res.json({
                status: 'success',
                message: 'Comment Added!'
            })
    } catch (error){
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
        })
    } 
};

const displayComment = async (req, res) => {
    try {
        const comment = await CommentModel.find().sort({ createdAt: -1 })
        console.log("comment posted!")
        return res.json(comment)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
};

const deleteComment = async (req, res) => {
    try {
      const getComment = await AnnouncementModel.findById(req.body.announcement);
      await CommentModel.findByIdAndDelete(req.body.id);
      const deleteID = getComment.comments.filter((currentValue)=>{
          console.log(currentValue,req.body.id)
        return currentValue !== req.body.id
      })
      await AnnouncementModel.findByIdAndUpdate(req.body.announcement, {
        comments: deleteID,
      });
      
      return res.json({ redirect: '/' });
    } catch (error) {
      console.log(error);
      return res.json({
        status: 'error',
        message: error,
      });
    }
  };

module.exports = {
    createComment: createComment,
    displayComment: displayComment,
    deleteComment: deleteComment,
}