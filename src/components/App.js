import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";
import SignIn from "./SignIn/SignIn";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Card from "./Card/Card";
import NewQuestion from "./NewQuestion/NewQuestion";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Error from "./Error/Error";
import "./App.css";

class App extends Component {
  componentDidMount() {
    //get initial data from our local file (simulate database)
    this.props.dispatch(handleInitialData());
  }

  render() {
    if (this.props.authedUser) {
    }
    return (
      <Router>
        <div className="app">
          <Nav />
          <main>
            <Switch>
              <Route path="/signIn" component={SignIn} />
              <Route path="/" exact component={Home} />
              <Route path="/Home" exact component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/questions/:id" component={Card} />
              <Route path="/error" component={Error} />
              <Redirect to="/error" />
            </Switch> 
          </main>
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser,
  };
}

export default connect(mapStateToProps)(App);
