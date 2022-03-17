const { CommentModel } = require("../models/model-comments");
const { AnnouncementModel } = require("../models/model-announcement");
const mongoose = require('mongoose');

async function createComment(req, res) {
  try {

    const id = mongoose.Types.ObjectId();
    const addComment = new CommentModel({ _id: id, ...req.body });
    await addComment.save()
    await AnnouncementModel.updateMany({ _id: req.body.announcement }, { $push: { comments: id } })
    console.log("Done!")
    return res.json({
      status: 'success',
      message: 'Comment Added!'
    })
  } catch (error) {
    console.log("Something went wrong!" + error)
    return res.json({
      status: 'error',
      message: error
    })
  }
};

const displayComment = async (req, res) => {
  try {
    const comment = await CommentModel.find({ announcement: req.body.announcement })
    console.log("comment posted!")
    return res.json(comment)
  } catch (error) {
    console.log("Something went wrong!", error)
    return res.json({
      status: 'error',
      message: error,
    })
  }
};

const deleteComment = async (req, res) => {
  try {

    await CommentModel.findByIdAndDelete(req.body.commentID);
    await AnnouncementModel.updateMany({ _id: req.body.announcement }, { $pull: { comments: req.body.commentID } })

    return res.json({ redirect: '/' });
  } catch (error) {
    console.log(error);
    return res.json({
      status: 'error',
      message: error,
    });
  }
};
const updateComment = async (req, res) => {
  try {
    await CommentModel.findByIdAndUpdate(req.body.commentID, req.body)
    return res.json({
      status: 'success',
      message: 'comment edited!'
    })
  } catch (error) {
    console.log(error)
    return res.json({
      error: error,
      status: 'error'
    })
  }
}
module.exports = {
  createComment: createComment,
  displayComment: displayComment,
  deleteComment: deleteComment,
  updateComment: updateComment
}