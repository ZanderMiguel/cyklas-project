import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar_Inside';
import useGet from '../customHooks/useGet';
function ProtectedRoutes({
  component: Component,
  path,
  maxWidth,
  data,
  ...attrib
}) {
  return (
    <>
      {localStorage.token && <Navbar data={data} />}
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? (
            <Component data={data.current.data} />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </>
  );
}

export default ProtectedRoutes;
