import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <section className="app">
    <header>
      <h1>Welcome to Prana!</h1>
    </header>

    <Route path="/signin" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </section>
);

export default App;
