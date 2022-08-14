import React from 'react';
import LiveQuiz from './LIVE QUIZ/LiveQuiz';
import { useParams } from 'react-router-dom';
function LiveQuizSetup({ socket }) {
  const { roomID } = useParams();
  const [quizlit, setQuizlit] = React.useState(null);
  socket.emit('quizLobby', roomID);
  React.useMemo(() => {
    socket.once('quizInit', (members, roomID) => {
      console.log(members);
      setQuizlit(
        <LiveQuiz members={members} roomID={roomID} socket={socket} />
      );
    });
  });

  return <>{quizlit && quizlit}</>;
}

export default LiveQuizSetup;
