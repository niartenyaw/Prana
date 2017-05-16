import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import TopNav from './top_nav';

const mapStateToProps = (state, { match }) => ({
  currentUser: state.session.currentUser,
  match: match
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(TopNav));
