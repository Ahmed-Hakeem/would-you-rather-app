import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { handleSaveQuestionAnswer } from "../../actions/shared";

import "./Questionnare.css";

class Questionnare extends Component {
  state = {
    chosenOption: "",
  };

  handleChange = (e) => {
    this.setState({
      chosenOption: e.target.name,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, authedUser, dispatch, history } = this.props;
    dispatch(
      handleSaveQuestionAnswer({
        qid: id,
        authedUser: authedUser,
        answer: this.state.chosenOption,
      })
    );
    history.push(`/questions/${id}`);
  };

  componentDidMount() {
    this.setState({
      chosenOption: "optionOne",
    });
  }

  render() {
    const Chosen = this.state.chosenOption;
    const { optionOne, optionTwo } = this.props;
    return (
      <form className="Questionnare" onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <span>
              <input
                type="radio"
                name="optionOne"
                value={optionOne}
                checked={Chosen === "optionOne"}
                onChange={this.handleChange}
              />
              {optionOne}
            </span>
          </li>
          <li>
            <span>
              <input
                type="radio"
                name="optionTwo"
                value={optionTwo}
                checked={Chosen === "optionTwo"}
                onChange={this.handleChange}
              />
              {optionTwo}
            </span>
          </li>
        </ul>
        <input className="Submit" type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

const connectedQuestionnare = connect(mapStateToProps)(Questionnare);

export default withRouter(connectedQuestionnare);
