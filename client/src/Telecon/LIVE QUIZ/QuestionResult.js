import React from 'react';
import CorrectAnswer from './CorrectAnswer';
import WrongAnswer from './WrongAnswer';

function QuestionResult({ point, socket }) {
  return (
    <>
      {point.current > 0 ? (
        <CorrectAnswer point={point} socket={socket} />
      ) : (
        <WrongAnswer point={point} socket={socket} />
      )}
    </>
  );
}

export default QuestionResult;
