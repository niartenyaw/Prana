import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteTeam } from '../../actions/team_actions';
import TeamShow from './team_show';

const _empty = {
  name: ""
};

const mapStateToProps = (state, { match }) => ({
  currentTeam: state.teams.allTeams[match.params.teamId] || _empty
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
