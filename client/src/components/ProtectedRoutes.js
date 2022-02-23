import React from 'react';
import Container from '@mui/material/Container';
import { Route, Redirect, useParams } from 'react-router-dom';
import Navbar from './Navbar_Inside';

function ProtectedRoutes({ component: Component, path, maxWidth, ...attrib }) {
  return (
    <>
      {localStorage.token && <Navbar />}
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? (
            <Component />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </>
  );
}

export default ProtectedRoutes;
