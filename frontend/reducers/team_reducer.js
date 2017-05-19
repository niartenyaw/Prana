import { RECEIVE_TEAM, RECEIVE_TEAMS, REMOVE_TEAM } from '../actions/team_actions';

const nullTeams = {
  allTeams: {
    0: {
      name: "",
      creator_id: 0
    }
  },
  currentTeam: {
    name: "",
    creator_id: 0
  }
};

const TeamReducer = (state = nullTeams, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  let allTeams = newState.allTeams;
  switch(action.type) {
    case RECEIVE_TEAMS:
      return Object.assign({}, newState, { allTeams: action.teams });
    case RECEIVE_TEAM:
      const addToAllTeams = { allTeams: Object.assign(allTeams, {
        [action.currentTeam.id] : action.currentTeam
      }) };
      return Object.assign(addToAllTeams, { currentTeam: action.currentTeam });
    case REMOVE_TEAM:
      delete allTeams[action.team.id];
      let currentTeam = newState.currentTeam;
      if (currentTeam.id === action.team.id) {
        currentTeam = {};
      }
      return { allTeams, currentTeam };
    default:
      return state;
  }
};

export default TeamReducer;
