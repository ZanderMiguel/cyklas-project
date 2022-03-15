import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar_Inside';
import useGet from '../customHooks/useGet';
function ProtectedRoutes({
  component: Component,
  path,
  maxWidth,
  data,
  socket,
  ...attrib
}) {
  return (
    <>
      {localStorage.token && <Navbar />}
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? (
            socket ? (
              <Component socket={socket} />
            ) : (
              <Component />
            )
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </>
  );
}

export default ProtectedRoutes;
