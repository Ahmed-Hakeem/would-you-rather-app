import {
  getInitialData,
  setQAnswerRemotely,
  setQuestionRemotely,
} from "../utils/API";
import { getQuestions } from "./questions";
import { getUsers } from "./users";

export const SET_Q_ANSWER = "SET_Q_ANSWER";
export const SET_QUESTION = "SET_QUESTION";

//shared action creators

function setQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SET_Q_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

function setQuestion(question) {
  return {
    type: SET_QUESTION,
    question,
  };
}

//async actions ... fetching data from api then dispatch to local state

//1- get all questions and users from api then fill local state with them

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}

//2- save authed_user answer for a specific question remotely then localy
export function handleSaveQuestionAnswer(authed_user_Answer) {
  return (dispatch) => {
    return setQAnswerRemotely(authed_user_Answer).then(
      //then set qanswer locally
      dispatch(setQuestionAnswer(authed_user_Answer))
    );
  };
}
//3- save authed_user new Question  remotely then localy

export function handleSaveQuestion(newQuestion) {
  return (dispatch) => {
    return setQuestionRemotely(newQuestion).then((newQuestion) => {
      dispatch(setQuestion(newQuestion));
    });
  };
}
