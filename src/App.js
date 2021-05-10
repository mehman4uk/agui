import React from "react";
import About from "./Pages/about";
import Auth from "./Pages/auth";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </>
    );
  }
}

export default App;
