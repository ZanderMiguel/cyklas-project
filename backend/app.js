require('dotenv').config()
const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const cors = require('cors')
const router = require("./routers/routers")
const mongoose = require("mongoose")



// DB connection and server
//  mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(
//  app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}\nConnected to Database!`)
// })
//  ).catch((err) => console.log(err))

const startAndConnectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        await app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}\nConnected to Database!`)
        })
    } catch (err) {
        console.log(err)
    }

}

//middlewares
app.use(cors())
app.use(express.json())
startAndConnectToDb()
app.use(express.static('public'))



//routers

app.use(router)

//start server


// // if(false){
// //     app.use(express.static(__dirname + '/client/dist/'))
// //     app.get(/.*/, (res,req) => res.sendFile(__dirname + '/client/dist/index.html'))
// // }
//     app.get('/',(req,res)=>{

//         fs.readFile('./client/my-app/public/index.html', (err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 res.sendFile('/client/my-app/public/index.html', {root: __dirname})

//             }
//         })
//     })

