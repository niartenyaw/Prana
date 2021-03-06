import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const getAllUsers = () => dispatch => (
  UserAPIUtil.getAllUsers()
    .then(users => dispatch(receiveUsers(users)))
);

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});
