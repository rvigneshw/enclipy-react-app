import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";

const fakeAuth = {
  signedIn: true,
};

const RequireAuth = ({ children }) => {
  if (!fakeAuth.signedIn) {
    return <Redirect to="/login" />;
  }

  return children;
};
const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <RequireAuth>
          <Route path="/">
            <Home />
          </Route>
        </RequireAuth>
        <Route path="/login" component={Login} />
        {/* <Route component={Error} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
