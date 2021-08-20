import { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));

export const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Suspense fallback={<div />}>
        <Route path="/" exact component={Home} />
        <Route path="/details/">
          <Details />
        </Route>
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Routes;
