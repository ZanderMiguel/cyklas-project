import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Names from '../Dashboard/Dashboard'
import People from '../Dashboard/Components/People'
//importing Mui

//importing components
import NavbarLandingpage from '../components/Navbar_landingpage';

function Landing() {
  return ( 
    <Router>
      <Switch>
        {/* <Route exact path={'/:page?'}> 
          <NavbarLandingpage />
        </Route> */}
        <Route exact path={'/Dashboard'} component={People}/>
      </Switch>
    </Router>
  );
}

export default Landing;
