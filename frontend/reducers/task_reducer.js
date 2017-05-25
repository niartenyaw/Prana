import {
  RECEIVE_TASKS,
  RECEIVE_TASK,
  REMOVE_TASK,
  RECEIVE_TASK_ERRORS } from '../actions/task_actions';

const _nullTask = {
  name: "",
  description: "",
  creator_id: 0,
  assignee_id: 0,
  project_id: 0,
  finished: false
};

const _nullTasks = {
  allTasks: {
    0: _nullTask
  },
  current: _nullTask,
  errors: []
};

const TaskReducer = (state = _nullTasks, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch(action.type) {

    case RECEIVE_TASKS:

      return Object.assign(
        {},
        newState,
        { allTasks: action.tasks });

    case RECEIVE_TASK:

      const addToAllTasks = Object.assign(
        newState.allTasks,
        { [action.task.id]: action.task });

        return {
          allTasks: addToAllTasks,
          current: action.task,
          errors: []
        };

    case REMOVE_TASK:

      const allTasks = newState.allTasks;
      delete allTasks[action.id];

      let current = newState.current;
      if (current.id === action.id) {
        current = _nullTask;
      }

      return {
        allTasks,
        current,
        errors: []
      };

    case RECEIVE_TASK_ERRORS:

      console.log(action.errors);

      return Object.assign(newState, { errors: action.errors });

    default:

      return state;

  }
};

export default TaskReducer;
