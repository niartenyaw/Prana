import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveUser } from '../../actions/user_actions';
import CompShow from '../shared/comp_show';

const _empty = {
  name: ""
};

const mapStateToProps = (state, { match }) => {
  return {
    current: state.users.allUsers[match.params.userId] || _empty,
    errors: state.users.errors,
    type: "user"
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  receiveCurrent: user => dispatch(receiveUser(user)),
  deleteComp: () => {}
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompShow)
);
