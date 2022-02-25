require('dotenv').config()
const express = require('express')
const app = express()
//const {Socket} = require('socket.io')

const io = require('socket.io')(3001,{
    cors: {
        origin: ['http://localhost:3000']
    }
})

const cors = require('cors')
const router = require("./routers/routers")
const mongoose = require("mongoose")

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

//socket.io events
io.on('connection',socket=>{
    socket.on('join-room',(roomId,userId)=>{
        console.log(roomId,userId)
        socket.join(roomId)
        socket.to(roomId).emit('user-connected',userId)
        socket.on('disconnect', () => {
            socket.to(roomId).emit('user-disconnected',userId)
        })
        socket.on('send-message',(message)=>{
            console.log(message)
            socket.to(roomId).emit('receive-message',message)
            
    
        })
    })
   
})



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

