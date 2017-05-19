import React from 'react';
import { Switch } from 'react-router-dom';
import { ProRoute } from '../../util/route_util';
import DashboardContainer from '../dashboard/dashboard_container';
import TeamShowContainer from '../team/team_show_container';

class MainPanel extends React.Component {
    render() {
      return (
        <div className="main-panel">
          <div className="inner-panel">
            <ProRoute path="/dashboard" component={DashboardContainer} />
            <Switch>
              <ProRoute exact path="/teams/new" key="new" component={TeamShowContainer} />
              <ProRoute exact path="/teams/:teamId" key="edit" component={TeamShowContainer} />
            </Switch>
          </div>
        </div>
      );
    }
}

export default MainPanel;
