import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import URLS from "../resources/Urls";
import LoadingComponent from "../components/loading";

const DashboardComponent = lazy(() => import("./dashboard/index"));

function PrivateRoutes() {
  return (
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={URLS.dashboard} component={DashboardComponent} />
        <Route
          exact
          path={URLS.overviewTwo}
          render={() => <div>overviewTwo</div>}
        />
        <Route
          exact
          path={URLS.overviewThree}
          render={() => <div>overviewThree</div>}
        />
        <Route exact path={URLS.overview} render={() => <div>overview</div>} />
        <Route exact path={URLS.tickets} render={() => <div>tickets</div>} />
        <Route exact path={URLS.ideasTwo} render={() => <div>ideasTwo</div>} />
        <Route
          exact
          path={URLS.ideasThree}
          render={() => <div>ideasThree</div>}
        />
        <Route exact path={URLS.ideas} render={() => <div>ideas</div>} />
        <Route exact path={URLS.contacts} render={() => <div>contacts</div>} />
        <Route exact path={URLS.agents} render={() => <div>agents</div>} />
        <Route exact path={URLS.articles} render={() => <div>articles</div>} />
        <Route exact path={URLS.settings} render={() => <div>settings</div>} />
        <Route
          exact
          path={URLS.subscription}
          render={() => <div>subscription</div>}
        />
        <Redirect to={URLS.dashboard} />
      </Switch>
    </Suspense>
  );
}

export default PrivateRoutes;
