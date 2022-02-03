import React from 'react';
import Container from '@mui/material/Container';
import { Route, Redirect } from 'react-router-dom';
function ProtectedRoutes({ component: Component, path, ...attrib }) {
  localStorage.setItem('token',"ayukol")
  return (
    <Container maxWidth="md">
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? <Component />: <Redirect to="/"/>;
        }}
      />
    </Container>
  );
}

export default ProtectedRoutes;
