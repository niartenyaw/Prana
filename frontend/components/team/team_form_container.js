import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postTeam, patchTeam, receiveErrors } from '../../actions/team_actions';
import TeamForm from './team_form';

const mapStateToProps = (state, { match }) => ({
  team: match.params.postId ? state.teams.allTeams[match.params.postId] : undefined
});

const mapDispatchToProps = (dispatch, { match }) => ({
  processForm: match.params.postId ? (
    team => dispatch(patchTeam(team))
  ) : (
    team => dispatch(postTeam(team))
  ),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamForm)
);
