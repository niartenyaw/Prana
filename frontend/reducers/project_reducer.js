import {
  RECEIVE_PROJECT,
  RECEIVE_PROJECTS,
  REMOVE_PROJECT,
  RECEIVE_PROJECT_ERRORS } from '../actions/project_actions';

const nullProject = {
  name: "",
  creator_id: 0,
  team_id: 0
};

const nullProjects = {
  allProjects: {
    0: nullProject
  },
  current: nullProject,
  errors: []
};

const blankErrors = {
  errors: []
};

const ProjectReducer = (state = nullProjects, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state, blankErrors);

  let allProjects = newState.allProjects;

  switch(action.type) {

    case RECEIVE_PROJECTS:

      return Object.assign(newState, {allProjects: action.projects});

    case RECEIVE_PROJECT:

      const addedToAllProjects = Object.assign(
        allProjects,
        { [action.current.id]: action.current }
      );

      return Object.assign(
        { allProjects: addedToAllProjects },
        { current: action.current },
        blankErrors
      );

    case REMOVE_PROJECT:
      delete allProjects[action.id];

      let current = newState.current;
      if (current.id === action.id) {
        current = nullProject;
      }

      return { allProjects, current, errors: [] };

    case RECEIVE_PROJECT_ERRORS:

      return Object.assign(newState, {errors: action.errors });

    default:

      return state;
  }
};

export default ProjectReducer;
