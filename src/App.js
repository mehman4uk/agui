import React from "react";
import About from "./Pages/about";
import Auth from "./Pages/auth";
import Dashboard from "./Pages/dashboard";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/auth" component={Auth} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    );
  }
}

export default App;
