import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TeamIndex from './team_index';
import { getAllTeams, postTeam, patchTeam, deleteTeam } from '../../actions/team_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  allTeams: asArray(state.teams.allTeams)
});

const mapDispatchToProps = dispatch => ({
  getAllTeams: () => dispatch(getAllTeams()),
  postTeam: team => dispatch(postTeam(team)),
  patchTeam: team => dispatch(patchTeam(team)),
  deleteTeam: id => dispatch(deleteTeam(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamIndex)
);
