import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndexItem from '../shared/comp_index_item';
import { receiveTeamErrors } from '../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  comp: ownProps.comp,
  type: "team"
});

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(receiveTeamErrors([]))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndexItem)
);
