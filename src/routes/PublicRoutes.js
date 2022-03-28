import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import URLS from "../resources/Urls";

function PublicRoutes() {
  return (
    <Switch>
      <Route path={URLS.login} render={() => <div>login</div>} />
      <Route path={URLS.signup} render={() => <div>signup</div>} />
      <Route
        path={URLS.forgotPassword}
        render={() => <div>forgotPassword</div>}
      />
      <Redirect to={URLS.login} />
    </Switch>
  );
}

export default PublicRoutes;
