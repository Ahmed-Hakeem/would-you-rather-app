import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./SignIn.css";

import { setAuthedUser } from "../../actions/authedUser";
import questImage from "../../images/questionnare.png";

class SignIn extends Component {
  state = {
    authedUser: "",
  };

  setNewAuthedUser = () => {
    this.props.dispatch(setAuthedUser(this.state.authedUser));
    this.props.history.push("/");
  };

  changeUser = (event) => {
    //mutate state with set state to make rerender the ui with user choice
    this.setState({ authedUser: event.target.value });
  };

  componentWillUnmount() {}

  render() {
    const { users } = this.props;

    return (
      <div className="signIn">
        <div>
          <h1>Welcome to the Would You Rather App!</h1>
          <div>Please sign in to continue</div>
        </div>
        <img
          src={`${questImage}`}
          alt="questionnare"
          style={{ width: "100%", height: "30%" }}
        ></img>

        <select
          className="selection"
          value={this.state.authedUser}
          onChange={this.changeUser}
        >
          <option value="" default defaultValue disabled>
            Select User
          </option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
          {users.length === 0 ? (
            <option value="" default defaultValue disabled>
              ...loading
            </option>
          ) : (
            ""
          )}
        </select>
        <button style={{ cursor: "pointer" }} onClick={this.setNewAuthedUser}>
          Sign In
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users: Object.values(users),
    authedUser: authedUser,
  };
}

const connectedSignIn = connect(mapStateToProps)(SignIn);

export default withRouter(connectedSignIn);
