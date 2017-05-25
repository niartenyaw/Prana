import React from 'react';
import { Switch } from 'react-router-dom';
import { ProRoute } from '../../util/route_util';
import DashboardContainer from '../dashboard/dashboard_container';
import TeamShowContainer from '../team/team_show_container';
import ProjectShowContainer from '../project/project_show_container';
import TaskShowContainer from '../task/task_show_container';
import UserShowContainer from '../user/user_show_container';

class MainPanel extends React.Component {

  componentWillMount() {
    this.props.getAll();
  }

  render() {
    return (
      <div className="main-panel">
        <div className="inner-panel">
          <ProRoute path="/dashboard" component={DashboardContainer} />
          <Switch>
            <ProRoute exact path="/teams/new"
              key="new" component={TeamShowContainer} />
            <ProRoute path="/teams/:teamId"
              key="edit" component={TeamShowContainer} />
            <ProRoute exact path="/projects/new"
              key="new" component={ProjectShowContainer} />
            <ProRoute path="/projects/:projectId"
              key="edit" component={ProjectShowContainer} />
            <ProRoute path="/users/:userId"
              key="show" component={UserShowContainer} />
          </Switch>
        </div>
        <ProRoute exact path="/teams/:teamId/tasks/:taskId"
          component={TaskShowContainer} />
        <ProRoute exact path="/projects/:projectId/tasks/:taskId"
          component={TaskShowContainer} />
        <ProRoute exact path="/dashboard/tasks/:taskId"
            component={TaskShowContainer} />
          <ProRoute exact path="/users/:userId/tasks/:taskId"
            component={TaskShowContainer} />
      </div>
    );
  }
}

export default MainPanel;
