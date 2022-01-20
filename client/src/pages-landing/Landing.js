import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
//importing Mui

//importing components
import NavbarLandingpage from '../components/Navbar_landingpage';

function Landing() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/:page?'}>
          <NavbarLandingpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Landing;
