import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndex from '../shared/comp_index';
import TeamIndexItemContainer from './team_index_item_container';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, { match }) => ({
  allComps: asArray(state.teams.allTeams),
  CompIndexItemContainer: TeamIndexItemContainer,
  type: "team"
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CompIndex)
);
