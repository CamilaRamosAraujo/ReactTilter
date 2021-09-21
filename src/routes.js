import React from "react";
import Home from "./components/Home";
import Board from "./components/Board";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route path="/board" exact component={Board} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default Routes;
