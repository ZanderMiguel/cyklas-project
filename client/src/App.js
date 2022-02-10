import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Records from './pages/Records';
import Setting from './Settings/SettingsCont';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Navbar_landingpage from './components/Navbar_landingpage';
import TeleconLanding from './pages-landing/TeleconLanding';
import Telecon from './Telecon/Telecon';
import QuizLit from './pages/Quizlit';
import Rooms from './pages/Rooms';
import Room_inside from './Room-content-layout/Room_inside';

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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />

            <ProtectedRoutes exact path="/telecon" component={TeleconLanding} />
            <ProtectedRoutes exact path="/rooms" component={Rooms} />
            <ProtectedRoutes exact path="/settings" component={Setting} />
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} />
            <ProtectedRoutes exact path="/records" component={Records} />
            <ProtectedRoutes
              exact
              path="/telecon/:teleRoom?"
              component={Telecon}
            />
            <Route exact path="/:page?" component={Navbar_landingpage} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
