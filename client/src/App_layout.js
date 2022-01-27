import React from 'react';
import Navbar from './components/Navbar_Inside';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//pages
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Quizlit from './pages/Quizlit';
import Telecon from './pages/Telecon';
import Records from './pages/Records';
import Setting from './pages/Setting';

import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

function App_layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Container maxWidth="lg">
            <Switch>
              <Route path="/Dashboard">
                <Dashboard />
              </Route>
              <Route path="/Rooms">
                <Rooms />
              </Route>
              <Route path="/Quizlit">
                <Quizlit />
              </Route>
              <Route path="/Telecon">
                <Telecon />
              </Route>
              <Route path="/Records">
                <Records />
              </Route>
              <Route path="/Setting">
                <Setting />
              </Route>
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App_layout;
