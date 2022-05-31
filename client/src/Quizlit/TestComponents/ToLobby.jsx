import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
function ToLobby({ socket }) {
  const { lobby, name, quizID } = useParams();
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/question', { quizID })
      .then((res) => {
        socket.emit('join-quizLobby', lobby, name, res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Redirect to="/quizlit/lobby" />
    </div>
  );
}

export default ToLobby;
