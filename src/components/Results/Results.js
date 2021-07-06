import React from "react";
import { connect } from "react-redux";
import Result from "../Result/Result";

import "./Results.css";

const PollResults = (props) => {
  const totalVotes = props.firstOptionVotes + props.secondOptionVotes;
  return (
    <div className="Results">
      <Result
        option={props.optionOne}
        votes={props.firstOptionVotes}
        votedOption={props.answer}
        totalVotes={totalVotes}
      />
      <Result
        option={props.optionTwo}
        votes={props.secondOptionVotes}
        votedOption={props.answer}
        totalVotes={totalVotes}
      />
    </div>
  );
};

function mapStateToProps({ authedUser, questions }, { id }) {
  return {
    firstOptionVotes: questions[id].optionOne.votes.length,
    secondOptionVotes: questions[id].optionTwo.votes.length,
    answer: questions[id].optionOne.votes.includes(authedUser)
      ? questions[id].optionOne.text
      : questions[id].optionTwo.text,
  };
}

export default connect(mapStateToProps)(PollResults);
