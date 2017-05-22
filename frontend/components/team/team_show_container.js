import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteTeam } from '../../actions/team_actions';
import CompShow from '../shared/comp_show';
import TeamFormContainer from './team_form_container';

const _empty = {
  name: ""
};

const mapStateToProps = (state, { match }) => {
  return {
    current: state.teams.allTeams[match.params.teamId] || _empty,
    errors: state.teams.errors,
    type: "team",
    form: TeamFormContainer
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  deleteComp: () => dispatch(deleteTeam(match.params.teamId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CompShow)
);
