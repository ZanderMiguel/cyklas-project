import React from 'react';
import { Grid } from '@mui/material';
import Service_CyClassroom from './Service_CyClassroom';
import QuizLit from './QuizLit';
import TeleCon from './TeleCon';

function Service() {
  return (
    <>
      <section>
        <Service_CyClassroom />
      </section>
      <section>
        <QuizLit />
      </section>
      <section>
        <TeleCon />
      </section>
    </>
  );
}

export default Service;
