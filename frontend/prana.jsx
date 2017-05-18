import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { getAllTeams, getOneTeam, postTeam, patchTeam, deleteTeam } from './actions/team_actions';

window.getAllTeams = getAllTeams;
window.getOneTeam = getOneTeam;
window.postTeam = postTeam;
window.patchTeam = patchTeam;
window.deleteTeam = deleteTeam;

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

  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
