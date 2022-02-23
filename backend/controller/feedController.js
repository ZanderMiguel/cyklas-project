const Feed = require('../models/model-feed')

async function createFeed(req, res) {
    try{

        const addFeed = new Feed({
            postID:req.body.postID,
            content:req.body.content,
            author: req.body.author,
            time: req.body.time,
            title:req.body.title,
            commentID:req.body.commentID,
        });

        await addFeed.save()
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

const displayFeed = async (req, res) => {
    try {
        const feed = await Feed.find().sort({ createdAt: -1 })
        console.log("activity posted!")
        return res.json(feed)
    } catch (error) {
        console.log("Something went wrong!")
        return res.json({
            status: 'error',
            message: error,
        })
    }
}

const deleteFeed = async (req, res) => {
    try {
        await Feed.findByIdAndDelete(req.params.id)
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

const updateFeed = async (req, res) => {
    try {
        await Feed.findByIdAndUpdate(req.params.id, req.body)
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
    createFeedController : createFeed,
    displayFeedController: displayFeed,
    deleteFeedController: deleteFeed,
    updateFeedController: updateFeed,
}