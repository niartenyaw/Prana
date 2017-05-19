import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteTeam } from '../../actions/team_actions';
import TeamShow from './team_show';

const mapStateToProps = (state, { match }) => ({

});

const mapDispatchToProps = (dispatch, { match }) => ({
  deleteTeam: () => dispatch(deleteTeam(match.params.teamId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamShow)
);
