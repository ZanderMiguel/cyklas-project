import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
function ToLobby({ socket }) {
  const { lobby, name, quizID } = useParams();
  React.useMemo(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/question', { quizID })
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
