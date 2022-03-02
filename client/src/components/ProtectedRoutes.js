import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar_Inside';
import useGet from '../customHooks/useGet';
function ProtectedRoutes({ component: Component, path, maxWidth, ...attrib }) {
  const { data } = useGet('http://192.168.1.10:5000/login');
  return (
    <>
      {localStorage.token && <Navbar data={data} />}
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? (
            <Component data={data} />
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </>
  );
}

export default ProtectedRoutes;
