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
    const ratings = await EvaluationModel.find({});
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};
