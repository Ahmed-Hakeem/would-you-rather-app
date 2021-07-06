import { SET_Q_ANSWER, SET_QUESTION } from "../actions/shared";
import { GET_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    //initiate questions local property with empty object locally until
    // questions came from the api
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    //then
    //if authed user answered a question  then
    //first: define the answered question
    //then : add his name to the answer votes

    case SET_Q_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser,
            ]),
          },
        },
      };

    //or added a new question then add it to questions property as a new property
    //defined by question id then made its value to be question info
    case SET_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
}
