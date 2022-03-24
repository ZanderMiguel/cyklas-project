import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Records from './Records/Records';
import Setting from './Settings/SettingsCont';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './Dashboard/Dashboard';
import Navbar_landingpage from './components/Navbar_landingpage';

import { io } from 'socket.io-client';

import TeleconStart from './Telecon/TeleconStart';
import QuizLit from './Quizlit/Quizlit';
import Quizform from './Quizlit/Quiz&ExamForm/Quizform';
import Rooms from './Rooms/Rooms';
import Room_inside from './Rooms/Room-content-layout/Room_inside';
import View_activity from './Rooms/Room-content-layout/View_activity';
import Forgot_password from './pages-landing/Forgot_password';
import Notfound from './Notfound';
import Livequiz_multiplechoice from './Quizlit/LiveQuiz/Livequiz_multiplechoice';
import StudentLiveQuiz_multiplechoice from './Quizlit/LiveQuiz/StudentLiveQuiz_multiplechoice';
import Student_rankings from './Quizlit/LiveQuiz/Student_rankings';
// import Conference_details from './Telecon/Telecon_Components/Conference_details';
// import Members from './Telecon/Telecon_Components/Members';
// import Message_area from './Telecon/components/Messages';
// import Presentation from './Telecon/Telecon_Components/Presentation';
import Student_activities from './Dashboard/Student_activities';
import Student_viewactivity from './Dashboard/Student_viewactivity';
import Student_viewexam from './Dashboard/Student_viewexam';
import Student_viewquiz from './Dashboard/Student_viewquiz';
import Exam_take from './Dashboard/Exam_take';
import Exam_start from './Dashboard/Exam_start';
import View_quiz from './Quizlit/Quizbank-content-layout/Quizbank-view/View_quiz';
import View_exam from './Quizlit/Quizbank-content-layout/Quizbank-view/View_exam';
import Telecon_room from './Telecon/Telecon_room';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
      color: '#3F3D56',
    },
    pallete: {
      primary: {
        main: '#3F3D56',
      },
    },
    mixins: {
      toolbar: {
        minHeight: '56px',
        '@media (min-width: 0px) and (orientation:landscape)': {
          minHeight: '50px',
        },
        '@media (min-width: 600px)': {
          minHeight: '64px',
        },
      },
    },
  });

  const socket = io.connect('http://localhost:3001');
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home/login" />
            <Redirect exact from="/home" to="/home/login" />
            <Route exact path="/home/:page?" component={Navbar_landingpage} />
            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
            <ProtectedRoutes exact path="/telecon" component={TeleconStart} />
            <ProtectedRoutes
              exact
              path="/rooms"
              component={Rooms}
              socket={socket}
            />
            <ProtectedRoutes
              exact
              path="/rooms/:roomID"
              component={Room_inside}
            />
            <ProtectedRoutes
              exact
              path="/rooms/:roomID/:activityID"
              component={View_activity}
              // data={data}
            />
            {/* Sample 2 id's */}
            <ProtectedRoutes
              exact
              path="/rooms/:id/:ab/:w"
              component={Dashboard}
            />
            <ProtectedRoutes exact path="/settings" component={Setting} />
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} />

            <ProtectedRoutes
              exact
              path="/quizlit/createquiz"
              component={Quizform}
            />

            {/* Javen Routes */}
            <ProtectedRoutes
              exact
              path="/Livequiz_multiplechoice"
              component={Livequiz_multiplechoice}
            />
            <ProtectedRoutes
              exact
              path="/StudentLiveQuiz_multiplechoice"
              component={StudentLiveQuiz_multiplechoice}
            />
            <ProtectedRoutes
              exact
              path="/Student_rankings"
              component={Student_rankings}
            />

            <Route
              exact
              path="/Student_activities"
              component={Student_activities}
            />

            <Route
              exact
              path="/Student_viewactivity"
              component={Student_viewactivity}
            />

            <Route
              exact
              path="/Student_viewexam"
              component={Student_viewexam}
            />

            <Route
              exact
              path="/Student_viewquiz"
              component={Student_viewquiz}
            />

            <Route exact path="/Exam_take" component={Exam_take} />

            <Route exact path="/Exam_start" component={Exam_start} />

            <Route exact path="/View_quiz" component={View_quiz} />

            <Route exact path="/View_exam" component={View_exam} />

            <ProtectedRoutes exact path="/records" component={Records} />
            <Route path="/forgotpassword">
              <Forgot_password />
            </Route>
            <Route path="/telecon/room" component={Telecon_room} />
            <Route component={Notfound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
