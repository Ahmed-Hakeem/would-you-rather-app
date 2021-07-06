import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Question from "../Question/Question";
import Interface from "../Interface/Interface";

import "./Home.css";

class Home extends Component {
  state = {
    needAnsweredView: false,
  };

  toggleAnsweredView = (e) => {
    this.state.needAnsweredView
      ? this.setState({ needAnsweredView: false })
      : this.setState({ needAnsweredView: true });
  };

  render() {
    const {
      questions,
      users,
      authedUser,
      sortedAnsweredQuestions,
      sortedUnAnsweredQuestions,
    } = this.props;
    const { needAnsweredView } = this.state;

    /*if some one want to reach the view of home by directly write its path then redirect him to the sign in page 
		else (he is authorized ) then show the view of his home */

    return !authedUser ? (
      <Redirect to="/signIn" />
    ) : (
      <div className="Home">
        <div className="headers">
          <div
            className={needAnsweredView ? "answered" : "notAnswered"}
            onClick={this.toggleAnsweredView}
          >
            <h1>Answered Questions</h1>
          </div>

          <div
            className={needAnsweredView ? "notAnswered" : "answered"}
            onClick={this.toggleAnsweredView}
          >
            <h1>UnAnswered Questions</h1>
          </div>
        </div>

        <div className="questions">
          <ul>
            {(needAnsweredView
              ? sortedAnsweredQuestions
              : sortedUnAnsweredQuestions
            ).map((qId) => (
              <li key={qId}>
                <Question
                  authorName={users[questions[qId].author].name}
                  avatarURL={users[questions[qId].author].avatarURL}
                  view={"unanswered"}
                >
                  <Interface
                    qId={qId}
                    answer={questions[qId].optionOne.text}
                    view={needAnsweredView}
                  />
                </Question>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const sortCallback = (item1, item2) =>
    new Date(questions[item2].timestamp) - new Date(questions[item1].timestamp);
  let sortedAnsweredQuestions, sortedUnAnsweredQuestions;

  if (authedUser) {
    //1- after getting all questions from the store then divide them to answered by auth user and unanswered
    const answeredQuestions = Object.keys(users[authedUser].answers);
    const unAnsweredQuestions = Object.keys(questions).filter(
      (question) => !answeredQuestions.includes(question)
    );

    //2- sort each array by question time
    sortedAnsweredQuestions = answeredQuestions.sort(sortCallback);
    sortedUnAnsweredQuestions = unAnsweredQuestions.sort(sortCallback);
  }

  return {
    authedUser,
    users,
    questions,
    sortedUnAnsweredQuestions,
    sortedAnsweredQuestions,
  };
}

const connectedHome = connect(mapStateToProps)(Home);
export default withRouter(connectedHome);
