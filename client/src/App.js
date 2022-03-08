import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
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
import Conference_details from './Telecon/Telecon_Components/Conference_details';
import Members from './Telecon/Telecon_Components/Members';
import Message_area from './Telecon/Telecon_Components/Message_area';
import Presentation from './Telecon/Telecon_Components/Presentation';

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
  const data = React.useRef('');

  const socket = io.connect('http://localhost:3001/');
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home/login" />
            <Redirect exact from="/home" to="/home/login" />
            <Route exact path="/home/:page?">
              <Navbar_landingpage data={data} />
            </Route>
            <ProtectedRoutes
              exact
              path="/dashboard"
              component={Dashboard}
              data={data}
            />
            <ProtectedRoutes
              exact
              path="/telecon"
              component={TeleconStart}
              data={data}
            />
            <ProtectedRoutes
              exact
              path="/rooms"
              component={Rooms}
              data={data}
            />
            <ProtectedRoutes
              exact
              path="/rooms/:roomID"
              component={Room_inside}
              data={data}
            />
            <ProtectedRoutes
              exact
              path="/rooms/:roomID/:activityID"
              component={View_activity}
            />
            {/* Sample 2 id's */}
            <ProtectedRoutes
              exact
              path="/rooms/:id/:ab/:w"
              component={Dashboard}
              data={data}
            />
            <ProtectedRoutes
              exact
              path="/settings"
              component={Setting}
              data={data}
            />
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} />
            <ProtectedRoutes
              exact
              path="/quizlit/createquiz"
              component={Quizform}
            />
            {/* Javen Routes */}
            <ProtectedRoutes exact path="/Livequiz_multiplechoice" component={Livequiz_multiplechoice} />
            <ProtectedRoutes exact path="/StudentLiveQuiz_multiplechoice" component={StudentLiveQuiz_multiplechoice} />
            <ProtectedRoutes exact path="/Student_rankings" component={Student_rankings} />
            <ProtectedRoutes exact path="/Conference_details" component={Conference_details} />
            <ProtectedRoutes exact path="/Members" component={Members} />
            <ProtectedRoutes exact path="/Message_area" component={Message_area} />
            <ProtectedRoutes exact path="/Presentation" component={Presentation} />
            <ProtectedRoutes exact path="/records" component={Records} />
            <Route path="/forgotpassword">
              <Forgot_password />
            </Route>
            <Route component={Notfound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
