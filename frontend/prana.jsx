import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Temp
// import {signin, signout, signup} from './actions/session_actions';
// window.signin = signin;
// window.signout = signout;
// window.signup = signup;



document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
