import React from 'react';
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

            <ProRoute path="teams/new" component={TeamFormContainer} />
            <ProRoute path="/teams/:teamId" component={TeamShowContainer} />
            <ProRoute path="teams/:teamId/edit" component={TeamFormContainer} />
          </div>
        </div>
      );
    }
}

export default MainPanel;
