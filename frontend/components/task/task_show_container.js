import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { patchTask, postTask, deleteTask } from '../../actions/task_actions';
import CompShow from '../shared/comp_show';
import TaskFormContainer from './task_form_container';

const _emptyTask = {
  name: ""
};

const mapStateToProps = (state, ownProps) => {
  return {
    current: state.tasks.allTasks[ownProps.match.params.taskId] || _emptyTask,
    type: "taskdetail",
    form: TaskFormContainer,
    errors: state.tasks.errors
  };
};

const mapDispatchToProps = dispatch => ({
  receiveCurrent: () => {},
  deleteComp: id => dispatch(deleteTask(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompShow)
);
