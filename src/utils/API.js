import {
  _saveQuestionAnswer,
  _saveQuestion,
  _getUsers,
  _getQuestions,
} from "./_DATA";

export async function getInitialData() {
  const users = await _getUsers();
  const questions = await _getQuestions();
  return { users, questions };
}

export function setQAnswerRemotely(answer) {
  return _saveQuestionAnswer(answer);
}

export function setQuestionRemotely(question) {
  return _saveQuestion(question);
}
