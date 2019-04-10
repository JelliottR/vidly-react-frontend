import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

///
/// Renders a route if user is authenticated.
///

// Components need to start with a capital otherwise react complains
const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.getCurrentUser())
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
