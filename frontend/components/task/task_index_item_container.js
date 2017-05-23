import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndexItem from '../shared/comp_index_item';
import { receiveTaskErrors } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  comp: ownProps.comp,
  type: "task"
});

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(receiveTaskErrors([]))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndexItem)
);
