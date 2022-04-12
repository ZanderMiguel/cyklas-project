const crypto = require('crypto')
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif'){
        cb(null,'uploads/images')}
        else{
            cb(null,'uploads/files')
        }
    },
    filename: (req,file,cb) => {
        const fileName = crypto.randomBytes(16,(err,buf)=>{
            if(err){
                console.log(err)
                return err
            }
            return buf.toString('hex') + path.extname(file.originalname)
        })
        cb(null,filname)
    }
})
const upload = multer({storage})
module.exports = upload