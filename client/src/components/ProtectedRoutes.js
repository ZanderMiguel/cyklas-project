import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar_Inside';
import { CssBaseline } from '@mui/material';
function ProtectedRoutes({
  component: Component,
  path,
  maxWidth,
  data,
  socket,
  questionArray,
  ...attrib
}) {
  console.log();
  return (
    <>
      <CssBaseline />
      {localStorage.token && <Navbar path={path} />}

      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? (
            socket ? (
              <>
                {questionArray ? (
                  <Component questionArray={questionArray} socket={socket} />
                ) : (
                  <Component socket={socket} />
                )}
              </>
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
