import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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
