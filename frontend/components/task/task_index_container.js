import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import TaskIndexItemContainer from './task_index_item_container';
import { getAllTasks } from '../../actions/task_actions';
import { selectProjectTasks, selectTeamTasks } from '../../reducers/selectors';

const selectorVar = type => {
  if (type === "team" || type === "project") {
    return `${type}_id`;
  }
  else if (type === "user") {
    return "assignee_id";
  }
};

const selectorId = (params, type) => (
  params[`${type}Id`]
);

const selectTasks = (type, params, state) => {
  switch (type) {
    case "project":

      return selectProjectTasks(
        selectorId(params, type),
        state.tasks.allTasks);

    case "team":

      const selected = selectTeamTasks(
        selectorId(params, type),
        state.projects.allProjects,
        state.tasks.allTasks);
      return selected;
  }
};

const mapStateToProps = (state, ownProps) => {
  const comps = selectTasks(ownProps.type, ownProps.match.params, state);
  return {
    allComps: comps,
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
