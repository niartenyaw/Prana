import React from 'react';
import { Switch } from 'react-router-dom';
import { ProRoute } from '../../util/route_util';
import DashboardContainer from '../dashboard/dashboard_container';
import TeamShowContainer from '../team/team_show_container';
import TeamFormContainer from '../team/team_form_container';

class MainPanel extends React.Component {
    render() {
      return (
        <div className="main-panel">
          <div className="inner-panel">
            <ProRoute path="/dashboard" component={DashboardContainer} />
            <Switch>
              <ProRoute exact path="/teams/new" component={TeamFormContainer} />
              <ProRoute exact path="/teams/:teamId" component={TeamFormContainer} />
            </Switch>
            <ProRoute exact path="/teams/:teamId/edit" component={TeamFormContainer} />
          </div>
        </div>
      );
    }
}

export default MainPanel;
