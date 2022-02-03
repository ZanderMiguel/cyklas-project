import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@mui/material/Container';

import Landing from './pages-landing/Landing';
import App_layout from './App_layout';
import Navbar from './components/Navbar_Inside';
import Rooms from './pages/Rooms';
import ProtectedRoutes from './pages/ProtectedRoutes';
import Dashboard from './pages/Dashboard';
import Navbar_landingpage from './components/Navbar_landingpage';

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
  const [navbar, setNavbar] = React.useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <ProtectedRoutes exact path="/Dashboard" component={App_layout} />
            <Route exact path="/:page?" component={Landing} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
