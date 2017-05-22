import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

export const getAllProjects = () => dispatch => (
  ProjectAPIUtil.getAllProjects()
  .then(projects => dispatch(receiveProjects(projects)))
);

export const postProject = project => dispatch => (
  ProjectAPIUtil.postProject(project)
    .then(project => dispatch(receiveProject(project)))
);

export const patchProject = project => dispatch => (
  ProjectAPIUtil.patchProject(project)
    .then(project => dispatch(receiveProject(project)))
);

export const deleteProject = id => dispatch => (
  ProjectAPIUtil.deleteProject(id)
    .then(project => dispatch(removeProject(project.id)))
);


export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  current: project
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const removeProject = id => ({
  type: REMOVE_PROJECT,
  id
});

export const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});
