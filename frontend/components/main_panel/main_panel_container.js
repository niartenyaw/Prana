import MainPanel from './main_panel';
import { connect } from 'react-redux';
import { getAllTeams } from '../../actions/team_actions';
import { getAllProjects } from '../../actions/project_actions';
import { getAllTasks } from '../../actions/task_actions';
import { getAllUsers } from '../../actions/user_actions';

const mapDispatchToProps = dispatch => ({
  getAll: () => {
    dispatch(getAllTeams());
    dispatch(getAllProjects());
    dispatch(getAllTasks());
    dispatch(getAllUsers());
  }
});

export default connect(null, mapDispatchToProps)(MainPanel);
