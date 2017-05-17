import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then(respUser => dispatch(receiveCurrentUser(respUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signin = user => dispatch => (
  SessionAPIUtil.signin(user)
    .then((respUser) => dispatch(receiveCurrentUser(respUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const signout = () => dispatch => (
  SessionAPIUtil.signout()
    .then(() => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
