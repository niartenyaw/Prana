import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';

const App = () => (
  <section className="app">
    <header>
      <TopNavContainer />
    </header>

    <Route path="/signin" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </section>
);

export default App;
