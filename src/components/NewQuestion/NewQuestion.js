import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";

import { handleSaveQuestion } from "../../actions/shared";

import "./NewQuestion.css";

const optionOneText = "optionOneText";
const optionTwoText = "optionTwoText";
class NewQuestion extends Component {
  state = {
    [optionOneText]: "",
    [optionTwoText]: "",
  };

  handleInputChange = (e) => {
    console.log(e.target);

    this.setState({ [e.target.name]: e.target.value });
  };

  addNewQuestion = (e) => {
    e.preventDefault();
    //validate input before dispatching
    if (this.state.optionOneText === "" || this.state.optionTwoText === "")
      return;

    const { dispatch, authedUser, history } = this.props;
    dispatch(handleSaveQuestion({ ...this.state, author: authedUser }));
    history.push("/");
  };

  render() {
    const { authedUser } = this.props;
    if (!authedUser) return <Redirect to="/signIn" />;

    return (
      <div className="NewQuestion">
        <div className="wrapper">
          <h2 className="Title">Create New Question</h2>
          <div className="Question-Info">
            <h5>Complete the question:</h5>
            <h3>Would you rather ...</h3>
            <form onSubmit={this.addNewQuestion}>
              <input
                type="text"
                className="options"
                placeholder="write your first Option here ..."
                name={optionOneText}
                value={this.state.optionOneText}
                onChange={this.handleInputChange}
              />
              <p>OR</p>
              <input
                type="text"
                className="options"
                placeholder="write your second Option here ..."
                name={optionTwoText}
                value={this.state.optionTwoText}
                onChange={this.handleInputChange}
              />
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

const connectedNewQuestion = connect(mapStateToProps)(NewQuestion);
export default withRouter(connectedNewQuestion);
