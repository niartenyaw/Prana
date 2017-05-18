import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TeamShow from './team_show';

const mapStateToProps = (state, { match }) => ({
  currentTeam: state.teams.allTeams[match.params.teamId]
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamShow)
);
