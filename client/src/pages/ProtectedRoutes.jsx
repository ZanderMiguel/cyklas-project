import React from 'react';
import Container from '@mui/material/Container';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar_Inside';

function ProtectedRoutes({ component: Component, path, maxWidth,socket, ...attrib }) {
  
  return (
    <>
      {localStorage.token && <Navbar />}
      <Container maxWidth={maxWidth}>
        <Route
          {...attrib}
          render={() => {
            return localStorage.token !== undefined ? (
              <Component socket={socket}/>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      </Container>
    </>
  );
}

export default ProtectedRoutes;
