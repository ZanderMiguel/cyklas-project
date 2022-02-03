import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Telecon from '../Telecon/Telecon'
//importing Mui

//importing components
import NavbarLandingpage from '../components/Navbar_landingpage';
import TeleconLanding from './TeleconLanding';

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
<<<<<<< HEAD
        <Route exact path={'/telecon'} component={TeleconLanding}/>
        <Route exact path={'/telecon/:teleRoom?'} component={Telecon}/>
=======
          <Redirect from="/Home" to="/" />
>>>>>>> origin/Zander
          <Route exact path={'/:page?'}>
            <NavbarLandingpage />
          </Route>
          
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default Landing;
