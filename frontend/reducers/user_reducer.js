import {
  RECEIVE_USERS,
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';

const _nullUser = {
  name: "",
  email: "",
  id: 0
};

const _nullUsers = {
  allUsers: {
    0: _nullUser
  },
  current: _nullUser,
  errors: []
};

const UserReducer = (state = _nullUsers, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_USERS:

      return Object.assign({}, _nullUsers, { allUsers: action.users });

    case RECEIVE_USER:

      return Object.assign(newState, { current: action.user });

    case RECEIVE_USER_ERRORS:

      return Object.assign(newState, { errors: action.errors });

    default:

      return state;
  }
};

export default UserReducer;
