import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import TopNavContainer from './top_nav/top_nav_container';
import DashboardContainer from './dashboard/dashboard_container';
import TeamIndexContainer from './team/team_index_container';

const App = () => (
  <section className="app">
    <header className="header">
      <TopNavContainer />
    </header>

    <div className="main">
      <Route path="/teams" component={TeamIndexContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
      <AuthRoute path="/signin" component={SplashContainer} />
      <AuthRoute path="/signup" component={SplashContainer} />
    </div>
  </section>
);

export default App;
