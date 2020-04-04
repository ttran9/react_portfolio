import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Home from "./components/portfolio/Home";
import About from "./components/portfolio/About";
import Project from "./components/portfolio/Project";
import * as Constants from "./Constants";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path={`${Constants.HOME_URL}`} component={Home} />
            <Route exact path={`${Constants.ABOUT_URL}`} component={About} />
            <Route
              exact
              path={`${Constants.PROJECT_URL}`}
              component={Project}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
