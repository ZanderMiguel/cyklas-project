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
      {localStorage.token && <Navbar data={data} />}
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? (
            socket?<Component data={data.current} socket={socket}/> : data ? <Component data={data.current} />: <Component />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </>
  );
}

export default ProtectedRoutes;
