import React from 'react';
import { ProRoute } from '../../util/route_util';
import DashboardContainer from '../dashboard/dashboard_container';

class MainPanel extends React.Component {
    render() {
      return (
        <div className="main-panel">
          <div className="inner-panel">
            <ProRoute path="/dashboard" component={DashboardContainer} />
          </div>
        </div>
      );
    }
}

export default MainPanel;
