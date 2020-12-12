import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import LoginRedirect from "./views/LoginRedirect";


const RequireAuth = ({ children }) => {
  if (!localStorage.getItem('jwt')) {
    return <Redirect to="/login" />;
  }

  return children;
};
const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/google/callback" component={LoginRedirect} />
        <Route path="/login" component={Login} />
        <RequireAuth>
          <Route path="/" exact>
            <Home />
          </Route>
        </RequireAuth>
        
        {/* <Route component={Error} /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
