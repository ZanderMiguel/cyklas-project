import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
function QuizGameSetup({ socket }) {
  const { quizID } = useParams();
  const [redirect, setRedirect] = React.useState(null);
  window.open(`/quiz-game/${quizID}/0`, '_self');
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/quizlit', { quizID })
      .then((response) => {
        axios
          .post('http://localhost:5000/question', { quizID })
          .then((res) => {
            console.log(res.data);
            socket.emit('loadData', res.data, quizID, response.data);
            if (res.data) {
              setRedirect(<Redirect to={`/quiz-game/${quizID}/0`} />);
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  return <>{redirect && redirect}</>;
}

export default QuizGameSetup;
