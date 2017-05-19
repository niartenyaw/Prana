import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllTeams, postTeam, patchTeam, receiveErrors } from '../../actions/team_actions';
import TeamForm from './team_form';

const _empty = {
  name: "",
  creator_id: 0
};

const mapStateToProps = (state, { match }) => {
  return {
    currentTeam: state.teams.allTeams[match.params.teamId] || _empty
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  getAllTeams: () => dispatch(getAllTeams()),
  patchTeam: team => dispatch(patchTeam(team)),
  postTeam: team => dispatch(postTeam(team)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamForm)
);
