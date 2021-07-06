import { GET_USERS } from "../actions/users";
import { SET_Q_ANSWER, SET_QUESTION } from "../actions/shared";

export default function users(state = {}, action) {
  switch (action.type) {
    //initiate state with empty object until
    //users are fetched from the api

    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };

    //then
    //if the authed user answer to a question then add his answer
    //to his answers object in this format "questionID ": "OptionName"
    case SET_Q_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            //"questionID ": "OptionName"
            [action.qid]: action.answer,
          },
        },
      };

    //if user added a new question then add its id to  his questions array property

    case SET_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    default:
      return state;
  }
}
