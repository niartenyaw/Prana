import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import TaskIndexItemContainer from './task_index_item_container';
import {
  selectProjectTasks,
  selectTeamTasks,
  selectUserTasks } from '../../reducers/selectors';


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

      return selectTeamTasks(
        selectorId(params, type),
        state.projects.allProjects,
        state.tasks.allTasks);

    case "dashboard":

      return selectUserTasks(
        state.session.currentUser.id,
        state.tasks.allTasks);

  }
};

const mapStateToProps = (state, ownProps) => ({
  allComps: selectTasks(ownProps.type, ownProps.match.params, state),
  CompIndexItemContainer: TaskIndexItemContainer,
  type: 'task'
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CompIndex)
);
