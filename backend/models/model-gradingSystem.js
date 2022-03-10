const mongoose = require('mongoose')

const GradingSystemSchema = new mongoose.Schema({
    classStanding: {
        text: "Class Standing",
        percentage: .6,
        activities: {
            text: "Activities",
            percentage: .3,
            seatwork: {
                text: "Seatwork",
                percentage: {type: Number,required: true}
            }
        },
        quizzes: {
            text: 'Quizzes',
            percentage: .2
        },
        classParticipation: {
            text: "Class Participation",
            percentage: .1
        }
    },
    majorExam: {
        text: 'Major Exam',
        percentage: .4

    }

},{timestamps: true})
const GradingSystemModel = mongoose.model('gradingSystems',GradingSystemSchema)
module.exports = {GradingSystemModel,GradingSystemSchema}