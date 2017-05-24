import MainPanel from './main_panel';
import { connect } from 'react-redux';
import { getAllTeams } from '../../actions/team_actions';
import { getAllProjects } from '../../actions/project_actions';
import { getAllTasks } from '../../actions/task_actions';

const mapDispatchToProps = dispatch => ({
  getAll: () => {
    dispatch(getAllTeams());
    dispatch(getAllProjects());
    dispatch(getAllTasks());
  }
});

export default connect(null, mapDispatchToProps)(MainPanel);
