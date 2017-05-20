import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllTeams, postTeam, patchTeam, receiveTeamErrors } from '../../actions/team_actions';
import CompForm from '../comp_form';

const _empty = {
  name: ""
};

const mapStateToProps = (state, { match }) => ({
  current: state.teams.allTeams[match.params.teamId] || _empty,
  type: "team"
});

const mapDispatchToProps = (dispatch, { match }) => ({
  patchComp: team => dispatch(patchTeam(team)),
  postComp: team => dispatch(postTeam(team)),
  receiveErrors: errors => dispatch(receiveTeamErrors(errors))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompForm)
);
