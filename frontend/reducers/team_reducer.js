import { RECEIVE_TEAM,
  RECEIVE_TEAMS,
  REMOVE_TEAM,
  RECEIVE_TEAM_ERRORS } from '../actions/team_actions';

const nullTeams = {
  allTeams: {
    0: {
      name: "",
      creator_id: 0
    }
  },
  current: {
    name: "",
    creator_id: 0
  },
  errors: []
};

const TeamReducer = (state = nullTeams, action) => {
  Object.freeze(state);

  const blankErrors = {
    errors: []
  };

  let newState = Object.assign({}, state, blankErrors);

  let allTeams = newState.allTeams;

  switch(action.type) {
    case RECEIVE_TEAMS:
      return Object.assign({}, newState, { allTeams: action.teams });
    case RECEIVE_TEAM:
      const addToAllTeams = { allTeams: Object.assign(
        allTeams,
        { [action.current.id] : action.current})
      };
      return Object.assign(
        addToAllTeams,
        { current: action.current },
        blankErrors);
    case REMOVE_TEAM:
      delete allTeams[action.team.id];
      let current = newState.current;
      if (current.id === action.team.id) {
        current = {};
      }
      return { allTeams, current, errors: [] };
    case RECEIVE_TEAM_ERRORS:
      return Object.assign(newState, { errors: action.errors })
    default:
      return state;
  }
};

export default TeamReducer;
