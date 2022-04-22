const NotifModel = require('mongoose')

const createRequest = async(req,res) => {
    try{
        const notif = new NotifModel(req.body)
        await notif.save()
        return res.json(notif)
    }catch(err){
        console.log(err)
        return res.json(err)
    }
}
module.exports = {createRequest}