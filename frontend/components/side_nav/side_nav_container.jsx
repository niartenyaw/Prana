import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SideNav from './side_nav';

const mapStateToProps = (state, { match }) => ({
  currentTeam: state.teams.current
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
      mapStateToProps,
      null
  )(SideNav)
);
