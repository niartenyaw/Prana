import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProRoute } from '../util/route_util';

import SplashContainer from './splash/splash_container';
import TopNavContainer from './top_nav/top_nav_container';
import SideNavContainer from './side_nav/side_nav_container';
import MainPanelContainer from './main_panel/main_panel_container';

const App = () => (
  <section className="app">
    <header className="header">
      <TopNavContainer />
    </header>

    <div className="main">

      <AuthRoute path="/signin" component={SplashContainer} />
      <AuthRoute path="/signup" component={SplashContainer} />

      <ProRoute exact path="/" component={() => <Redirect to="/dashboard" />} />

      <ProRoute path="/" component={SideNavContainer} />
      <ProRoute path="/" component={MainPanelContainer} />
    </div>
  </section>
);

export default App;
