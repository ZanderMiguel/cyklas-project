import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Records from './Records/Records';
import Setting from './Settings/SettingsCont';
import ProtectedRoutes from './components/ProtectedRoutes';
import Dashboard from './Dashboard/Dashboard';
import Navbar_landingpage from './components/Navbar_landingpage';
import Telecon from './Telecon/Telecon';
import QuizLit from './Quizlit/Quizlit';
import Rooms from './Rooms/Rooms';
import Room_inside from './Rooms/Room-content-layout/Room_inside';
import View_activity from './Rooms/Room-content-layout/View_activity'

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1006,
      xl: 1536
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
            <ProtectedRoutes exact path="/telecon" component={Telecon} />
            <ProtectedRoutes exact path="/rooms" component={Rooms} />
            <ProtectedRoutes exact path="/rooms/:id" component={Room_inside} />
            <ProtectedRoutes exact path="/settings" component={Setting} />
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} />
            <ProtectedRoutes exact path="/records" component={Records} />
            <ProtectedRoutes exact path="/rooms/:id/:id" component={View_activity} />
            <Route path="/:page?" component={Navbar_landingpage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
