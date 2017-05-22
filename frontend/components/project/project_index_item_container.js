import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CompIndexItem from '../shared/comp_index_item';
import { receiveProjectErrors } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  comp: ownProps.comp,
  type: "project"
});

const mapDispatchToProps = dispatch => ({
  resetErrors: () => dispatch(receiveProjectErrors([]))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompIndexItem)
);
