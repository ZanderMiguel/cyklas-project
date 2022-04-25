import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Records from './Records/Records';
import Setting from './Settings/Settings';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './Dashboard/Dashboard';
import Navbar_landingpage from './components/Navbar_landingpage';
import Services_main from './pages-landing/Services/Services_main';
import About from './pages-landing/About';
import Contact from './pages-landing/Contact';
import CyClassroom from './pages-landing/Services/CyClassroom';
import QuizLit2 from './pages-landing/Services/QuizLit';
import TeleCon from './pages-landing/Services/TeleCon';

import { io } from 'socket.io-client';

import TeleconStart from './Telecon/TeleconStart';
import QuizLit from './Quizlit/Quizlit';
import Quizform from './Quizlit/Quiz&ExamForm/Quizform';
import Examform from './Quizlit/Quiz&ExamForm/Examform';
import Rooms from './Rooms/Rooms';
import Room_inside from './Rooms/Room-content-layout/Room_inside';
import View_activity from './Rooms/Activities/View_activity';
import Forgot_password from './pages-landing/Forgot_password';
import Notfound from './Notfound';
import Livequiz_multiplechoice from './Quizlit/LiveQuiz/Livequiz_multiplechoice';
import StudentLiveQuiz_multiplechoice from './Quizlit/LiveQuiz/StudentLiveQuiz_multiplechoice';
import Livequiz_correctanswer from './Quizlit/LiveQuiz/Livequiz_correctanswer';
import Livequiz_wronganswer from './Quizlit/LiveQuiz/Livequiz_wronganswer';
import Student_rankings from './Quizlit/LiveQuiz/Student_rankings';
import Student_activities from './Dashboard/Student_activities';
import Student_viewactivity from './Dashboard/Student_viewactivity';
import Student_viewexam from './Dashboard/Student_viewexam';
import Student_viewquiz from './Dashboard/Student_viewquiz';
import Notifications_viewall from './Notifications/Notifications_viewall';
import Exam_take from './Dashboard/Exam_take';
import Exam_start from './Dashboard/Exam_start';
import View_quiz from './Quizlit/Quizbank-content-layout/Quizbank-view/View_quiz';
import View_exam from './Quizlit/Quizbank-content-layout/Quizbank-view/View_exam';
import Telecon_room from './Telecon/Telecon_room';
import JoinQuiz from './Quizlit/TestComponents/JoinQuiz';
import ToLobby from './Quizlit/TestComponents/ToLobby';
import Lobby from './Quizlit/TestComponents/Lobby';
import LoadQuizlit from './Quizlit/TestComponents/LoadQuizlit';

// Student Side
import ClassCards_main from './student_side/ClassCards/ClassCards_main';
import Evaluation from './student_side/ClassCards/Evaluation';
import Dashboard_main from './student_side/Dashboard/Dashboard_main';
import Activities_main from './student_side/Rooms/Activities/Activities_main';
import Activity_viewed from './student_side/Rooms/Activities/Viewed/Activity_viewed';
import Quiz_viewed from './student_side/Rooms/Activities/Viewed/Quiz_viewed';
import Exam_viewed from './student_side/Rooms/Activities/Viewed/Exam_viewed';
import Rooms_inside2 from './student_side/Rooms/Rooms_inside2';
import Rooms_main from './student_side/Rooms/Rooms_main';
import Settings_main from './student_side/Settings/Settings_main';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins',
      color: '#3F3D56',
    },
    palette: {
      primary: {
        main: '#007fff',
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
  const [quizlit, setQuizlit] = React.useState(null);
  socket.on('joined-quizLobby', (lobby, quizLobby, questionArray) => {
    console.log('awit');
    setQuizlit(
      <ProtectedRoutes
        exact
        path="/livequiz_multiplechoice/:counter"
        component={Livequiz_multiplechoice}
        socket={socket}
        questionArray={questionArray}
      />
    );
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home/login" />
            <Redirect exact from="/home" to="/home/login" />
            <Route path="/forgotpassword" component={Forgot_password} />
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
              socket={socket}
              component={Room_inside}
            />
            <ProtectedRoutes
              exact
              path="/rooms/:roomID/:activityID"
              component={View_activity}
            />
            <ProtectedRoutes exact path="/settings" component={Setting} />
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} />
            <ProtectedRoutes
              exact
              path="/quizlit/createquiz"
              component={Quizform}
            />
            <ProtectedRoutes
              exact
              path="/quizlit/createexam"
              component={Examform}
            />
            {/* Javen Routes */}
            {quizlit}
            <ProtectedRoutes
              exact
              path="/StudentLiveQuiz_multiplechoice"
              component={StudentLiveQuiz_multiplechoice}
            />
            <ProtectedRoutes
              exact
              path="/Livequiz_correctanswer"
              component={Livequiz_correctanswer}
              socket={socket}
            />
            <ProtectedRoutes
              exact
              path="/Livequiz_wronganswer"
              component={Livequiz_wronganswer}
              socket={socket}
            />
            <ProtectedRoutes
              exact
              path="/student_rankings"
              component={Student_rankings}
              socket={socket}
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
            <Route
              exact
              path="/Notifications_viewall"
              component={Notifications_viewall}
            />

            {/* Student Side */}
            <Route exact path="/ClassCards_main" component={ClassCards_main} />
            <Route exact path="/Evaluation" component={Evaluation} />
            <Route exact path="/Dashboard_main" component={Dashboard_main} />
            <Route exact path="/Activities_main" component={Activities_main} />
            <Route exact path="/Activity_viewed" component={Activity_viewed} />
            <Route exact path="/Quiz_viewed" component={Quiz_viewed} />
            <Route exact path="/Exam_viewed" component={Exam_viewed} />
            <Route exact path="/Rooms_Inside2">
              <Rooms_inside2 socket={socket} />
            </Route>
            <Route
              exact
              path="/Rooms_main"
              component={Rooms_main}
              socket={socket}
            />
            <Route exact path="/Settings_main" component={Settings_main} />

            <Route exact path="/Exam_take/:quizID" component={Exam_take} />
            <Route exact path="/Exam_start/:examID" component={Exam_start} />
            <Route exact path="/View_quiz" component={View_quiz} />
            <Route exact path="/View_exam" component={View_exam} />
            <ProtectedRoutes exact path="/records" component={Records} />
            <Route path="/telecon/room" component={Telecon_room} />
            <Route exact path="/quizlit/join">
              <JoinQuiz socket={socket} />
            </Route>
            <Route exact path="/quizlit/lobby">
              <Lobby socket={socket} />
            </Route>
            <Route exact path="/quizlit/lobby/:lobby/:name/:quizID">
              <ToLobby socket={socket} />
            </Route>
            <Route component={Notfound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
