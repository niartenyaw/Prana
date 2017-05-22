import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postProject, patchProject, receiveProjectErrors } from '../../actions/project_actions';
import CompForm from '../shared/comp_form';

const _empty = {
  name: ""
};

const mapStateToProps = (state, { match }) => ({
  current: state.projects.allProjects[match.params.projectId] || _empty,
  type: "project"
});

const mapDispatchToProps = (dispatch, { match }) => ({
  patchComp: project => dispatch(patchProject(project)),
  postComp: project => dispatch(postProject(project)),
  receiveErrors: errors => dispatch(receiveProjectErrors(errors))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompForm)
);
