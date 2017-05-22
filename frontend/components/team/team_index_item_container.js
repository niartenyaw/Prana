import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndexItem from '../shared/comp_index_item';
import { receiveTeam, receiveTeamErrors } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  comp: ownProps.comp,
  type: "team"
});

const mapDispatchToProps = dispatch => ({
  receiveCurrent: team => dispatch(receiveTeam(team)),
  resetErrors: () => dispatch(receiveTeamErrors([]))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndexItem)
);
