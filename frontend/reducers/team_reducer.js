import { RECEIVE_TEAM,
  RECEIVE_TEAMS,
  REMOVE_TEAM,
  RECEIVE_TEAM_ERRORS } from '../actions/team_actions';

const nullTeam = {
  name: "",
  creator_id: 0,
  id: 0
};

const nullTeams = {
  allTeams: {
    0: nullTeam
  },
  current: nullTeam,
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

      if (allTeams[undefined]) {
        delete allTeams[undefined];
      }

      let id = action.current.id || 0;

      const addToAllTeams = { allTeams: Object.assign(
        allTeams,
        { [id] : action.current})
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

      return Object.assign(newState, { errors: action.errors });

    default:

      return state;
  }
};

export default TeamReducer;
