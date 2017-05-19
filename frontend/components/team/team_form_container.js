import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postTeam, patchTeam, receiveErrors } from '../../actions/team_actions';
import TeamForm from './team_form';

const mapStateToProps = (state, { match }) => ({
  team: state.allTeams[match.params.postId]
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
