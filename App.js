import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import info from "./src/main";
import portfolio from "./src/portpolio";
import request from "./src/request";
import map from "./src/map";
import faq from "./src/faq";
import indroduce from "./src/indroduce";
import Footer from "./src/footer";
import Navigation from "./components/Navigation";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation />

        <Route path="/" exact={true} component={info} />
        <Route path="/indroduce" exact={true} component={indroduce} />
        <Route path="/portfolio" exact={true} component={portfolio} />
        <Route path="/request" exact={true} component={request} />
        <Route path="/map" exact={true} component={map} />
        <Route path="/faq" exact={true} component={faq} />

        <Footer />
      </HashRouter>
    );
  }
}
