import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postProject, patchProject, receiveProjectErrors } from '../../actions/project_actions';
import CompForm from '../shared/comp_form';

const _empty = {
  name: ""
};

const mapStateToProps = (state, ownProps) => {
  const current = state.projects.allProjects[ownProps.match.params.projectId] || _empty;

  return {
    current: Object.assign(current, { team_id: state.teams.current.id }),
    type: ownProps.type
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    patchComp: project => dispatch(patchProject(project)),
    postComp: project => dispatch(postProject(project)),
    receiveErrors: errors => dispatch(receiveProjectErrors(errors))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompForm)
);
