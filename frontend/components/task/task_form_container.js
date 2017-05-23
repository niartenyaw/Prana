import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postTask, patchTask, receiveTaskErrors } from '../../actions/task_actions';
import CompForm from '../shared/comp_form';

const _empty = {
  name: ""
};

const mapStateToProps = (state, ownProps) => {
  const current = ownProps.comp || _empty;

  return {
    current,
    type: "task"
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    patchComp: task => dispatch(patchTask(task)),
    postComp: task => dispatch(postTask(task)),
    receiveErrors: errors => dispatch(receiveTaskErrors(errors))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompForm)
);
