import React from 'react';
import CyClassroom from './Service_CyClassroom';
import Quiz from './QuizLit';

function Service() {
  return (
    <>
      <section>
        <CyClassroom />
      </section>
      <section>
        <Quiz />
      </section>
    </>
  );
}

export default Service;
