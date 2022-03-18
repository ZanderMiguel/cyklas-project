const mongoose = require('mongoose')

const ParticipantSchema = new mongoose.Schema({

    status: {type: String, required: true},
    answer: {type: Array, required: true}
})