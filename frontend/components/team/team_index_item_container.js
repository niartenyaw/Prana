import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TeamIndexItem from './team_index_item';
import { receiveTeamErrors } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  team: ownProps.team
});

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(receiveTeamErrors([]))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TeamIndexItem)
);
