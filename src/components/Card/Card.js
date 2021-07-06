import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Question from "../Question/Question";
import Options from "../Questionnare/Questionnare";
import ResultsComponent from "../Results/Results";

import { Questionnare, Results } from "../Interface/Interface";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { view, question } = this.props;
    //view will be undefined until the user is authed user so i check for the view instead
    //CHECK mapstatetoprops function below
    if (!view) {
      return <Redirect to="/signIn" />;
    }
    const { avatarURL, name } = this.props.author;

    const optionOne = question.optionOne.text;
    const optionTwo = question.optionTwo.text;

    return (
      <div className="Card">
        <Question
          authorName={name || "Unknown Person"}
          view={view}
          avatarURL={avatarURL}
        >
          {view === Questionnare ? (
            <Options
              id={question.id}
              optionOne={optionOne}
              optionTwo={optionTwo}
            />
          ) : (
            <ResultsComponent
              id={question.id}
              optionOne={optionOne}
              optionTwo={optionTwo}
            />
          )}
        </Question>
      </div>
    );
  }
}

function mapStateToProps(
  { questions, users, authedUser },
  { location, match }
) {
  //get the question id from the path name
  const Q_Id = match.params.id;
  //get the specified view of the question if it is answered then display the result not the questionnare form
  let view;
  if (authedUser) {
    view = location.state ? location.state.view : Results;
  }

  //connect the component to only a specified question instead of sending it all questions
  let question = questions[Q_Id] || undefined;
  //if the question with this id doesn't exist in our questions then return and stop excuting
  if (!question) return {};

  let author = users[question.author];

  return {
    question,
    author,
    view,
  };
}
export default connect(mapStateToProps)(Card);
