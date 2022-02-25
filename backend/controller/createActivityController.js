const Activity = require('../models/model-createActivity')

async function createActivity(req, res) {
    try{

        const addActivity = new Activity({
            activityTopic: req.body.activityTopic,
            activityTitle: req.body.activityTitle,
            activityType: req.body.activityType,
            activityPoints: req.body.activityPoints,
            activityDueDate: req.body.activityDueDate,
            activityInstruction: req.body.activityInstruction,
            terms: req.body.terms,
        });

        await addActivity.save()
            console.log("Done!")
            return res.json({
                status: 'success',
                message: 'Activity Posted!'
            })
    } catch (error){
        console.log("Something went wrong!" + error)
        return res.json({
            status: 'error',
            message: error
        })
    } 
}

const displayActivity = async (req, res) => {
    try {
        const activity = await Activity.find().sort({ createdAt: -1 })
        console.log("activity posted!")
        return res.json(activity)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

const deleteActivity = async (req, res) => {
    try {
        await Activity.findByIdAndDelete(req.params.id)
        console.log(req.params.id)
        return res.json({ redirect: '/' })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

const updateActivity = async (req, res) => {
    try {
        await Activity.findByIdAndUpdate(req.params.id, req.body)
        console.log('helicopter')
        return res.json({ redirect: '/' })
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

module.exports = {
    createActivityController : createActivity,
    displayActivityController: displayActivity,
    deleteActivityController: deleteActivity,
    updateActivityController: updateActivity,
}