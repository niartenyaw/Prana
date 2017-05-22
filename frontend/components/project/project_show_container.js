import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveProject, deleteProject } from '../../actions/project_actions';
import CompShow from '../shared/comp_show';
import ProjectFormContainer from './project_form_container';

const _empty = {
  name: "",
  creator_id: 0,
  team_id: 0
};

const mapStateToProps = (state, { match }) => ({
  current: state.projects.allProjects[match.params.projectId] || _empty,
  errors: state.projects.errors,
  type: "project",
  form: ProjectFormContainer
});

const mapDispatchToProps = dispatch => ({
  receiveCurrent: project => dispatch(receiveProject(project)),
  deleteComp: () => dispatch(deleteProject(match.params.projectId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompShow)
);
