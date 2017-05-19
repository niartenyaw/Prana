import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TeamShow from './team_show';

const _empty = {
  name: "",
  creator_id: 0
};

const mapStateToProps = (state, { match }) => ({
  currentTeam: state.teams.allTeams[match.params.teamId] || _empty
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamShow)
);
