const ClassCardModel = require('../models/model-classCard');

const createClassCard = async (req, res) => {
  try {
    const classCard = new ClassCardModel(req.body);
    await classCard.save();
    return res.json(classCard);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayClassCard = async (req, res) => {
  try {
    const classCard = await ClassCardModel.find({ student: req.body.useID });
    console.log('Class Card Displayed');
    return res.json(classCard);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = { createClassCard, displayClassCard };
