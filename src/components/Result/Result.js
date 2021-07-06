import React from "react";

import "./Result.css";

const Result = (props) => {
  const Percentage = (props.votes / props.totalVotes) * 100;
  const isVoted = props.votedOption === props.option;

  return (
    <div className={` ${isVoted ? "voted" : "unvoted"}`}>
      <h3>Would you rather {props.option}?</h3>
      {isVoted ? <h4 className={"urChoice"}>Your choice!</h4> : ""}

      {isVoted ? <div className="mark"></div> : ""}

      <div className="ratio">
        <div className="progress" style={{ width: `${Percentage}%` }}>
          {Percentage.toFixed(0)}%
        </div>
      </div>
      <div className="showVotesNumber">
        {props.votes} out of {props.totalVotes} votes
      </div>
    </div>
  );
};

export default Result;
