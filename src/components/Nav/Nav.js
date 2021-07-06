import React, { Component } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";
import "./Nav.css";

class Nav extends Component {
  logout = () => {
    //set the authed user to null when user logout
    // but keep data (questions and users props) saved
    this.props.dispatch(setAuthedUser(null));
    //then redirect the user to sign in component
    this.props.history.push("/");
  };

  render() {
    const { authedUser, users, location } = this.props;
    const path = location.pathname;

    return (
      /*Hide navigation until user sign in cause it is redundant to show navigation to user before signing in */
      authedUser && (
        <header>
          <nav>
            <ul>
              <li className={path === "/" ? "selected" : ""}>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className={path === "/add" ? "selected" : ""}>
                <NavLink to="/add">New Question</NavLink>
              </li>
              <li className={path === "/leaderboard" ? "selected" : ""}>
                <NavLink to="/leaderboard">Leader Board</NavLink>
              </li>
            </ul>

            <ul>
              <li className="greeting">
                <span>{`Hello, ${users[authedUser].name}`}</span>
              </li>
              <li>
                <img src={users[authedUser].avatarURL} alt={"user_picture"} />
              </li>
              <li>
                <Link to="/" onClick={this.logout} className={"logout"}>
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser: authedUser,
    users: users,
  };
}

const connectedNav = connect(mapStateToProps)(Nav);
export default withRouter(connectedNav);
