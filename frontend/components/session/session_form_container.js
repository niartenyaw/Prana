import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { signup, signin, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, { match }) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: match.path
});

const mapDispatchToProps = (dispatch, { location }) => ({
  processForm: location.pathname === "/signup" ? (
    user => dispatch(signup(user))
  ) : (
    user => dispatch(signin(user))
  ),
  guestSignin: user => dispatch(signin(user)),
  receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(SessionForm)
);
