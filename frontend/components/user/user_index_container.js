import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import UserIndexItemContainer from './user_index_item_container';
import { getAllUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  allComps: asArray(state.users.allUsers),
  CompIndexItemContainer: UserIndexItemContainer,
  type: "user"
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CompIndex)
);
