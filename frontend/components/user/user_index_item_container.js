import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndexItem from '../shared/comp_index_item';
import { receiveUser, receiveUserErrors } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  comp: ownProps.comp,
  type: "user"
});

const mapDispatchToProps = dispatch => ({
  receiveCurrent: user => dispatch(receiveUser(user)),
  resetErrors: () => dispatch(receiveUserErrors([]))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndexItem)
);
