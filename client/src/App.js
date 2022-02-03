import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@mui/material/Container';

import Landing from './pages-landing/Landing';
import App_layout from './App_layout';
import Navbar from './components/Navbar_Inside';
import Rooms from './pages/Rooms';
import Records from './pages/Records';
import Setting from './pages/Setting';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Navbar_landingpage from './components/Navbar_landingpage';
import Telecon from './Telecon/Telecon';
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
       {localStorage.token && <Navbar/>}
        <Router>
          <Switch>
            <ProtectedRoutes exact path="/dashboard" component={Dashboard} />
            <ProtectedRoutes exact path="/telecon" component={Telecon} />
            <ProtectedRoutes exact path="/rooms" component={Rooms} />
            <ProtectedRoutes exact path="/settings" component={Setting} />
            <ProtectedRoutes exact path="/records" component={Records} />
            <Route exact path="/:page?" component={Landing} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
