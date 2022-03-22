const { GroupModel } = require('../models/model-groups');

const createGroup = async (req, res) => {
  try {
    const group = new GroupModel(req.body);
    group.save();
    console.log('Group created!');
    return res.json(group);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayGroups = async (req, res) => {
  try {
    const group = await GroupModel.find({ room: req.body.room }).sort({
      createdAt: -1,
    });
    console.log('Group displayed!');
    return res.json(group);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const deleteGroup = async (req, res) => {
  try {
    await GroupModel.findByIdAndDelete(req.body.groupID);
    return res.json({
      status: 'success',
      message: 'Group deleted',
    });
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = {
  createGroup,
  displayGroups,
  deleteGroup,
};
