const EvaluationModel = require('../models/model-evaluation');

const createEvaluation = async (req, res) => {
  try {
    const evaluation = new EvaluationModel(req.body);
    evaluation.save();
    console.log('Evaluation Created');
    return res.json(evaluation);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const displayRatings = async (req, res) => {
  try {
    const ratings = await EvaluationModel.aggregate([
      {
        $sort: {
          ratings: -1,
        },
      },
      {
        $group: {
          _id: {
            room: '$classCard.RoomName',
            roomID: '$classCard.roomID',
            prof: '$professor.name',
          },
          rating: { $avg: '$rating' },
        },
      },
    ]);
    return res.json(ratings);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
const getOverallRate = async (req, res) => {
  try {
    const ratings = await EvaluationModel.aggregate([
      {
        $sort: {
          ratings: -1,
        },
      },
      {
        $group: {
          _id: {
            profID: '$professor.profID',
            prof: '$professor.name',
          },
          rating: { $avg: '$rating' },
        },
      },
    ]);
    return res.json(ratings);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
};
module.exports = { createEvaluation, displayRatings, getOverallRate };
