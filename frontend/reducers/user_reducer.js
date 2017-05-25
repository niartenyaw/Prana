import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const _nullUser = {
  name: "",
  email: ""
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
    default:
      return state;
  }
};

export default UserReducer;
