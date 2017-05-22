import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// import * as Actions from './actions/project_actions';
//
// window.getAllProjects = Actions.getAllProjects;
// window.postProject = Actions.postProject;
// window.patchProject = Actions.patchProject;
// window.deleteProject = Actions.deleteProject;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }

  // window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
