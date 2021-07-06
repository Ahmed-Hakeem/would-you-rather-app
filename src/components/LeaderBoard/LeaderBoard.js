import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./LeaderBoard.css";

const LeaderBoard = (props) => {
  let { authedUser } = props;
  if (!authedUser) return <Redirect to="/signIn" />;
  const { UsersSortedArray } = props;
  return (
    <div className="LeaderBoard">
      <ul>
        {UsersSortedArray.map((user) => (
          <li key={user.id} className="user">
            <div className="user-info">
              <img
                src={user.avatarURL}
                alt="Default user icon"
                className="icon"
              />
              <div className="score-details">
                <h2>{user.name}</h2>
                <div className="Answered">
                  Answered Questions: {user.answered}
                </div>
                <div className="questioned">
                  Created Questions:{user.questioned}
                </div>
                <div className="score-value">
                  <h3>Score {user.Score}</h3>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  const UsersArray = Object.values(users).map((user) => {
    const answered = Object.values(user.answers).length;
    const questioned = user.questions.length;
    const Score = answered + questioned;
    return { ...user, Score, answered, questioned };
  });

  const UsersSortedArray = UsersArray.sort(
    (item1, item2) => item2.Score - item1.Score
  );
  return {
    UsersSortedArray,
    authedUser,
  };
}

const ConnectedLeaderBoard = connect(mapStateToProps)(LeaderBoard);

export default ConnectedLeaderBoard;
