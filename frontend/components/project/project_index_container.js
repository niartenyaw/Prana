import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import ProjectIndexItemContainer from './project_index_item_container';
import { selectTeamProjects } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  return {
    allComps: selectTeamProjects(state.teams.current.id, state.projects.allProjects),
    CompIndexItemContainer: ProjectIndexItemContainer,
    type: 'project'
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CompIndex)
);
