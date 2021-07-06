export const SET_AUTH_USER_ANSWER = "SET_AUTH_USER_ANSWER";
export const GET_USERS = "GET_USERS";

export function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  };
}
