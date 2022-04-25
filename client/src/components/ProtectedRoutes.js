import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar_Inside';
import { CssBaseline } from '@mui/material';
import ROOMS_INSIDE2 from '../student_side/Rooms/Rooms_inside2';
import Room_inside from '../Rooms/Room-content-layout/Room_inside';

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

      {Component ? (
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
      ) : localStorage.userData ? (
        JSON.parse(localStorage.userData).data.user.userType === 'Professor' ? (
          <Route
            exact
            path="/rooms/:roomID"
            render={() => {
              return localStorage.token !== undefined ? (
                <Room_inside socket={socket} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        ) : (
          <Route
            exact
            path="/rooms/:roomID"
            render={() =>
              localStorage.token !== undefined ? (
                <Room_inside socket={socket} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        )
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default ProtectedRoutes;
