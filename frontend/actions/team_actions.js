import * as TeamAPIUtil from '../util/team_api_util';

export const RECEIVE_TEAM = "RECEIVE_TEAM";
export const RECEIVE_TEAMS = "RECEIVE_TEAMS";
export const REMOVE_TEAM = "REMOVE_TEAM";
export const RECEIVE_TEAM_ERRORS = "RECEIVE_TEAM_ERRORS";

export const getAllTeams = () => dispatch => (
  TeamAPIUtil.getAllTeams()
    .then(teams => dispatch(receiveTeams(teams)))
);

export const postTeam = team => dispatch => (
  TeamAPIUtil.postTeam(team)
    .then(respTeam => dispatch(receiveTeam(respTeam)))
);

export const patchTeam = team => dispatch => (
  TeamAPIUtil.patchTeam(team)
    .then(respTeam => dispatch(receiveTeam(respTeam)))
);

export const deleteTeam = id => dispatch => (
  TeamAPIUtil.deleteTeam(id)
    .then(team => dispatch(removeTeam(team)))
);

export const receiveTeam = team => ({
  type: RECEIVE_TEAM,
  currentTeam: team
});

export const receiveTeams = teams => ({
  type: RECEIVE_TEAMS,
  teams
});

export const removeTeam = team => ({
  type: REMOVE_TEAM,
  team
});

export const receiveTeamErrors = errors => ({
  type: RECEIVE_TEAM_ERRORS,
  errors
});
