import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TeamIndex from './team_index';
import { getAllTeams } from '../../actions/team_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  allTeams: asArray(state.teams.allTeams)
});

const mapDispatchToProps = dispatch => ({
  getAllTeams: () => dispatch(getAllTeams()),
  deleteTeam: id => dispatch(deleteTeam(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamIndex)
);
