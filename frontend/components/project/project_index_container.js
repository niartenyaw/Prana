import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import ProjectIndexItemContainer from './project_index_item_container';
import { getAllProjects } from '../../actions/project_actions';
import { selectTeamProjects } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => {
  return {
    allComps: selectTeamProjects(state.teams.current.id, state.projects.allProjects),
    CompIndexItemContainer: ProjectIndexItemContainer,
    type: 'project'
  };
};

const mapDispatchToProps = dispatch => ({
  getAllComps: () => dispatch(getAllProjects())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndex)
);
