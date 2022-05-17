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
    const classCard = await ClassCardModel.find({
      'student.stdID': req.body.stdID,
    });
    console.log('Class Card Displayed');
    return res.json(classCard);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const findClassCard = async (req, res) => {
  try {
    const classCard = await ClassCardModel.findById(
      req.body.evalID.replace(':', '')
    );
    console.log(classCard);
    return res.json(classCard);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
module.exports = { createClassCard, displayClassCard, findClassCard };
