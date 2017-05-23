import * as TaskAPIUtil from '../util/task_api_util';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const getAllTasks = () => dispatch => (
  TaskAPIUtil.getAllTasks()
    .then(tasks => dispatch(receiveTasks(tasks)))
);

export const postTask = task => dispatch => (
  TaskAPIUtil.postTask(task)
    .then(respTask => dispatch(receiveTask(respTask)))
);

export const patchTask = task => dispatch => (
  TaskAPIUtil.patchTask(task)
    .then(respTask => dispatch(receiveTask(respTask)))
);

export const deleteTask = id => dispatch => (
  TaskAPIUtil.deleteTask(id)
    .then(task => dispatch(removeTask(task.id)))
);

export const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

export const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});
