import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import SubmitListing from "./containers/SubmitListing";
import "./assets/styles/styles.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/submit-listing" component={SubmitListing} />
      </Switch>
    </Router>
  );
}

export default App;
