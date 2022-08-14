require('dotenv').config();
const express = require('express');
const app = express();
const { v4 } = require('uuid');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');

const io = require('socket.io')(3001, {
  cors: {
    origin: ['http://localhost:3000', 'cyklas.tech'],
  },
});

const cors = require('cors');
const router = require('./routers/routers');
const fileRouter = require('./routers/FileRouter');
const mongoose = require('mongoose');
let gfs;
const startAndConnectToDb = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
      }
    );

    const conn = mongoose.createConnection(
      process.env.MONGODB_URI ||
        'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority'
    );
    conn.once('open', () => {
      gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads',
      });
    });
    await app.listen(process.env.PORT || 5000, () => {
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
app.use('/static', express.static('files'));
//app.use(express.static(__dirname + '/public'));
app.use(router);
let quizLobby = {};
let quizData = {};
let quizlitData = {};
let quizlitSrc = {};
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
  socket.once('groupInit', (roomID, groups) => {
    socket.to(roomID).emit('join-group', groups, roomID);
  });
  socket.once('render', (members, id, roomID) => {
    socket.to(roomID).emit('rendered', members, id, roomID);
  });
  socket.on('sendMessage', (data) => {
    socket.to(data.room).emit('receive_message', data);
  });

  //Live quiz socket
  socket.on('quizParticipants', (members, room, open, qID, quizSrc) => {
    quizLobby[room] = { members, room, open, qID };
    socket.to(room).emit('openAcceptDialog', room, open, quizSrc);
    quizlitSrc[room] = quizSrc;
  });
  socket.once('quizLobby', (roomID) => {
    socket.emit('quizInit', quizLobby[roomID], roomID);
  });
  socket.on('enter-lobby', (stdID, roomID) => {
    socket.join(roomID);
    socket.to(roomID).emit('joined-lobby', stdID, roomID, quizlitSrc[roomID]);
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

  //Quiz Game sockets
  socket.on('quizgameInit', (members, roomID) => {
    socket.to(roomID).emit('initializeGame', members);
  });
  socket.on('loadData', (quizSrc, quizID) => {
    quizData[quizID] = quizSrc;
    quizlitData[quizID] = quizSrc;
  });
  socket.once('start-quiz', (quizID) => {
    socket.join(quizID);
    console.log(quizData[quizID], quizID, quizlitData[quizID]);
    socket.emit('data-loaded', quizData[quizID], quizID, quizlitData[quizID]);
  });

  //Telecon
  socket.once('start-call', (roomID, id) => {
    socket.join(roomID);

    socket.to(roomID).emit('sendStream', id);
  });

  const exam_time = {};
  const quizGameTime = {};
  const stdTime = {};
  const scoreBoard = {};
  const next = {};
  const qProgress = {};
  socket.on('start-exam', (id, examTime) => {
    socket.join(id);
    examTime[examTime.length - 1] = 0;
    exam_time[id] = examTime;
    io.in(id).emit('timer-start', exam_time[id]);
  });

  socket.on('start-quiz-time', (quizID, time, qIdx, stdID) => {
    stdTime[stdID] = parseInt(time);
    quizGameTime[quizID] = Object.assign({}, stdTime);

    const countdown = setInterval(() => {
      socket.emit('tick', quizID, quizGameTime[quizID][stdID]);
      quizGameTime[quizID][stdID]--;
    }, 1000);
    setTimeout(() => {
      clearInterval(countdown);
      socket.emit('timesup', qIdx + 1);
    }, time * 1000 + 2000);
  });
  socket.on('to-next', (count, quizID, point, stdID, qIdx) => {
    let breaktime = count;

    const countdown = setInterval(() => {
      socket.emit('tick-next', breaktime);
      breaktime--;
    }, 1000);
    setTimeout(() => {
      clearInterval(countdown);
      socket.emit('next', qIdx + 1);
    }, count * 1000 + 2000);
  });
});

//Create storage engine

const storage = new GridFsStorage({
  url:
    process.env.MONGODB_URI ||
    'mongodb+srv://reypanerz:pantheonq1w2e3@learningmonggodb.jhlar.mongodb.net/Classes?retryWrites=true&w=majority',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename =
          file.originalname.replace(' ', '') +
          buf.toString('hex') +
          path.extname(file.originalname);
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
app.use('/', fileRouter(upload));

/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cilent/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__, dirname, 'client', 'build', 'index.html'));
  });
} */

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
