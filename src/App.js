import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/homepage/Homepage.component";
import ShopPage from "./page/shop/shop.component";
import Header from "./components/header/header.component";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
