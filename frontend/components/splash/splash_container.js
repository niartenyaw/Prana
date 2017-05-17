import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Splash from './splash';

const mapStateToProps = (state, { match }) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  formType: match.path
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: ownProps.location.pathname === "/signup" ? (
    user => dispatch(signup(user))
  ) : (
    user => dispatch(signin(user))
  )
});

export default withRouter(connect(null, null)(Splash));
