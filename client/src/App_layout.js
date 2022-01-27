import React from 'react';
import Navbar from './components/Navbar_Inside';

//pages
import Dashboard from './pages/Dashboard';
import Rooms from './pages/Rooms';
import Quizlit from './pages/Quizlit';
import Telecon from './pages/Telecon';
import Records from './pages/Records';
import Setting from './pages/Setting';

import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App_layout() {
  return (
    <>
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
    </>
  );
}

export default App_layout;
