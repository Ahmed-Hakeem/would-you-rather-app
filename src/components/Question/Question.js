import React from "react";

import "./Question.css";

const Results = "Results";

class Question extends React.Component {
  render() {
    const { view, authorName, avatarURL } = this.props;
    return (
      <div className="Question">
        <div className="Qheader">
          <h4>
            {view !== Results
              ? `${authorName} asks:`
              : `Asked by ${authorName}`}
          </h4>
        </div>
        <div className="Question-content">
          <div className="avatar">
            <img src={`${avatarURL}`} alt="User" className="img" />
          </div>
          <div className="Content">
            <h5>{view !== Results ? "Would You Rather ..." : "Results:"}</h5>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
