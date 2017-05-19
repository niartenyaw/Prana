import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllTeams, postTeam, patchTeam, receiveTeamErrors } from '../../actions/team_actions';
import TeamForm from './team_form';

const _empty = {
  name: ""
};

const mapStateToProps = (state, { match }) => ({
  currentTeam: state.teams.allTeams[match.params.teamId] || _empty
});

const mapDispatchToProps = (dispatch, { match }) => ({
  getAllTeams: () => dispatch(getAllTeams()),
  patchTeam: team => dispatch(patchTeam(team)),
  postTeam: team => dispatch(postTeam(team)),
  receiveTeamErrors: errors => dispatch(receiveTeamErrors(errors))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamForm)
);
