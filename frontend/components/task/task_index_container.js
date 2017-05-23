import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import TaskIndexItemContainer from './task_index_item_container';
import { getAllTasks } from '../../actions/task_actions';
import { selectTasks } from '../../reducers/selectors';

const selectorVar = type => {
  if (type === "team" || type === "project") {
    return `${type}_id`;
  }
  else if (type === "user") {
    return "assignee_id";
  }
};

const selectorId = (type, match) => (
  match.params[`${type}Id`]
);

const mapStateToProps = (state, ownProps) => {
  return {
    allComps: selectTasks(
      selectorId(ownProps.type, ownProps.match),
      selectorVar(ownProps.type),
      state.tasks.allTasks
    ),
    CompIndexItemContainer: TaskIndexItemContainer,
    type: 'task'
  };
};

const mapDispatchToProps = dispatch => ({
  getAllComps: () => dispatch(getAllTasks())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndex)
);
