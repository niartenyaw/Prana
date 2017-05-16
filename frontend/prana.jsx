import React from 'react';
import ReactDOM from 'react-dom';
import {signin, signout, signup} from './util/session_api_util';

window.signin = signin;
window.signout = signout;
window.signup = signup;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  ReactDOM.render(<h1>Prana coming soon</h1>, root);
});
