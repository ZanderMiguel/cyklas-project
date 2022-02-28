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
import TeleconStart from './Telecon/TeleconStart';
import QuizLit from './Quizlit/Quizlit';
import Quizform from './Quizlit/Quiz&ExamForm/Quizform';
import Rooms from './Rooms/Rooms';
import Room_inside from './Rooms/Room-content-layout/Room_inside';
import View_activity from './Rooms/Room-content-layout/View_activity';
import Forgot_password from './pages-landing/Forgot_password';
import Notfound from './Notfound';

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
            <ProtectedRoutes exact path="/rooms" component={Rooms} />
            <ProtectedRoutes
              exact
              path="/rooms/:roomID"
              component={Room_inside}
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
            />
            <ProtectedRoutes exact path="/settings" component={Setting} />
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} />
            <ProtectedRoutes
              exact
              path="/quizlit/createquiz"
              component={Quizform}
            />
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
