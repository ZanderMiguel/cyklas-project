const mongoose = require('mongoose')

const EvaluationSchema = new mongoose.Schema({
    classCard: {type: mongoose.Schema.Types.ObjectId},
    rating: {type: Number,required: true}

},{timestamps: true})

const EvaluationModel = mongoose.model('evaluation',EvaluationSchema)
module.exports = EvaluationModel