require('dotenv').config();
const express = require('express');
const app = express();
const { v4 } = require('uuid');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')
const io = require('socket.io')(3001, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});
const cors = require('cors');
const router = require('./routers/routers');
const imageRouter = require('./routers/imageRouter');
const fileRouter = require('./routers/FileRouter');
const mongoose = require('mongoose');
let gfs;
const startAndConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    const conn = mongoose.createConnection(process.env.MONGODB_URI);
    conn.once('open', () => {
      gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads',
      });
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

app.use(express.static('public'));

//routers

app.use(router);
let quizLobby = {};
//let teleMembers = {};
io.on('connection', (socket) => {
  socket.on('joinroom', (roomID, members, socketID) => {
    socket.join(roomID);
    socket.to(roomID).emit('user-connected', socketID);

    socket.to(roomID).emit('join-others', members, socketID, roomID);
    socket.on('disconnect', () => {
      socket.to(roomID).emit('user-disconnected', socketID);
    });
  });

  socket.on('render', (members, id, roomID) => {
    socket.to(roomID).emit('rendered', members, id, roomID);
  });

  socket.on('sendMessage', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  socket.on('create-room', () => {
    socket.emit('room-created', v4());
  });
  socket.on('create-post', () => {
    socket.emit('post-created', v4());
  });
  socket.on('create-comment', () => {
    socket.emit('post-comment', v4());
  });
  socket.on('timer-start', (time, point, qCount, lobby, name) => {
    socket.join(lobby);
    quizLobby[lobby][name]['questionCount'] = qCount;
    const timer = setInterval(() => {
      time--;
      io.in(lobby).emit('play', time, quizLobby[lobby][name].index);
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);

      io.in(lobby).emit('times-up', quizLobby[lobby][name]['result']);
      quizLobby[lobby][name]['result'] = '';
    }, time * 1000 + 1000);

    quizLobby[lobby][name]['points'] = point;
  });
  socket.on('send-answer', (answer, correct, name, lobby = '123') => {
    quizLobby[lobby][name]['result'] = answer === correct ? true : false;
  });
  socket.on('break', (lobby, name) => {
    socket.join(lobby);
    let breakTime = 4;
    const count = setInterval(() => {
      breakTime--;
      io.in(lobby).emit('next', quizLobby[lobby][name].points, breakTime);
    }, 1000);
    setTimeout(() => {
      clearInterval(count);
      quizLobby[lobby][name].index++;
      io.in(lobby).emit(
        'next-question',
        quizLobby[lobby][name].index,
        quizLobby[lobby][name]['questionCount']
      );
    }, 4000);
  });
  socket.on('join-quizLobby', (lobby, name, questionArray) => {
    quizLobby[lobby] = quizLobby[lobby]
      ? { participants: [...quizLobby[lobby].participants, name] }
      : { participants: [name] };
    quizLobby[lobby][name] = { index: 0, result: '' };
    socket.join(lobby);
    io.in(lobby).emit(
      'joined-quizLobby',
      lobby,
      quizLobby[lobby].participants,
      questionArray
    );
  });
  socket.on('game-ended', (lobby, name) => {
    quizLobby[lobby][name]['result'] = '';
    quizLobby[lobby][name]['index'] = 0;
    quizLobby[lobby][name]['questionCount'] = 0;
    quizLobby[lobby][name]['points'] = 0;
  });
  const exam_time = {};
  socket.on('start-exam', (id, examTime) => {
    socket.join(id);
    examTime[examTime.length - 1] = 0;
    exam_time[id] = examTime;
    io.in(id).emit('timer-start', exam_time[id]);
  });
});

//Create storage engine

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname + '_split_' + buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });
app.use('/', imageRouter(upload));
app.use('/', fileRouter(upload));
startAndConnectToDb();
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
