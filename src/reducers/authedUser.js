import { SET_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    //initiate authed user with null locally until user define himself
    case SET_AUTHED_USER:
      return action.id;
    //if user define himself then set the authed user property with his id

    default:
      return state;
  }
}
