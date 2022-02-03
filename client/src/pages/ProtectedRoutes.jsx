import React from 'react';

import { Route, Redirect } from 'react-router-dom';
function ProtectedRoutes({ component: Component, path, ...attrib }) {
  return (
    <div>
      <Route
        {...attrib}
        render={() => {
          return localStorage.token !== undefined ? <Component />: <Redirect to="/"/>;
        }}
      />
    </div>
  );
}

export default ProtectedRoutes;
