import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveProject, deleteProject } from '../../actions/project_actions';
import { receiveTeam } from '../../actions/team_actions';
import CompShow from '../shared/comp_show';
import ProjectFormContainer from './project_form_container';

const _empty = {
  name: "",
  creator_id: 0,
  team_id: 0
};

const mapStateToProps = (state, { match }) => {
  const current = state.projects.allProjects[match.params.projectId] || _empty;

  return {
    current,
    errors: state.projects.errors,
    type: "project",
    form: ProjectFormContainer,
    team: state.teams.current
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  receiveCurrent: project => dispatch(receiveProject(project)),
  deleteComp: () => dispatch(deleteProject(match.params.projectId)),
  receiveCurrentTeam: team => dispatch(receiveTeam(team))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompShow)
);
