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
import { io } from 'socket.io-client';
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
  const socket = io.connect('http://localhost:3001/');
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <ProtectedRoutes exact path="/dashboard" component={Dashboard} socket={socket}/>

            <ProtectedRoutes exact path="/telecon" component={TeleconLanding} socket={socket}/>
            <ProtectedRoutes exact path="/rooms" component={Rooms}socket={socket}/>
            <ProtectedRoutes exact path="/settings" component={Setting} socket={socket}/>
            <ProtectedRoutes exact path="/quizlit" component={QuizLit} socket={socket}/>
            <ProtectedRoutes exact path="/:records" component={Records} socket={socket}/>
            <ProtectedRoutes
              exact
              path="/telecon/:teleRoom?"
              component={Telecon}
              socket={socket}
            />
            <Route exact path="/:page?" component={Navbar_landingpage} socket={socket}/>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
