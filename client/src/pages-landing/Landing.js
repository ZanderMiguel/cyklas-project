import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
//importing Mui

//importing components
import NavbarLandingpage from '../components/Navbar_landingpage';

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

function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Redirect from="/Home" to="/" />
          <Route exact path={'/:page?'}>
            <NavbarLandingpage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Landing;
