import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import TopNavContainer from './top_nav/top_nav_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <section className="app">
    <header className="header">
      <TopNavContainer />
    </header>

    <div className="main">
      <AuthRoute path="/signin" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </div>
  </section>
);

export default App;
