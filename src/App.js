import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/homepage/Homepage.component";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
