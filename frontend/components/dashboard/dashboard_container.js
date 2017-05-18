import { connect } from 'react-redux';
import { withRouter }  from 'react-router';
import Dashboard from './dashboard';
import { getAllTeams } from '../../actions/team_actions';

const mapStateToProps = (state, { match }) => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({
  getAllTeams: () => dispatch(getAllTeams())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
