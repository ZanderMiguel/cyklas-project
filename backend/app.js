require('dotenv').config();
const express = require('express');
const app = express();
//const {Socket} = require('socket.io')

const io = require('socket.io')(3001, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

const cors = require('cors');
const router = require('./routers/routers');
const mongoose = require('mongoose');

const startAndConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port ${process.env.PORT}\nConnected to Database!`
      );
    });
  } catch (err) {
    console.log(err);
  }
};

//middlewares
app.use(cors());
app.use(express.json());
startAndConnectToDb();
app.use(express.static('public'));

//routers

app.use(router);
let result = ''
let index = 0
io.on('connection', (socket) => {
  socket.on('joinroom', (roomID, username) => {
    socket.join(roomID);
    console.log(
      `User with ID: ${socket.id} joined room: ${roomID} username: ${username}`
    );
  });

  socket.on('sendMessage', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id);
  });
  socket.on('create-room', (created) => {
    socket.emit('room-created', created);
  });
  socket.on('timer-start', (time,points) => {

    const timer = setInterval(() => {
      time--
      socket.emit('play', time)

    }, 1000)

    socket.on('send-answer',(answer,correct)=>{
      result = answer === correct? true: false
      
    })

    setTimeout(() => {
      clearInterval(timer)
      
      socket.emit('times-up',result)
      result=''
    }, (time * 1000)+1000)


    socket.on('break',()=>{
      let breakTime = 4
      const count = setInterval(()=>{
        breakTime--
        socket.emit('next',points,breakTime)
        
      },1000)
      setTimeout(()=>{
        clearInterval(count)
        index++
        socket.emit('next-question',index)
      },4000)
    })
  })
  

});

//socket.io events
// io.on('connection', (socket) => {
//   socket.on('join-room', (roomId, userId) => {
//     console.log(roomId, userId);
//     socket.join(roomId);
//     socket.to(roomId).emit('user-connected', userId);
//     socket.on('disconnect', () => {
//       socket.to(roomId).emit('user-disconnected', userId);
//     });
//     socket.on('send-message', (message) => {
//       console.log(message);
//       socket.to(roomId).emit('receive-message', message);
//     });
//   });
// });

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
