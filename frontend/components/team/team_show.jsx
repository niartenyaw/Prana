import React from 'react';
import TeamFormContainer from './team_form_container';

class TeamShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const teamName = this.props.currentTeam.name
    if (confirm(`Are you sure you want to delete ${teamName}`)) {
      this.props.deleteTeam(this.props.currentTeam.id)
        .then(this.props.history.push("/dashboard"));
    }
  }

  render() {
    return (
      <section className="team-show">
        <div className="team-header">
          <TeamFormContainer />
          { this.props.match.path === "/teams/new" ? ("") : (
            <button className="button" onClick={this.handleClick}>Delete</button>
          )}
        </div>
      </section>
    );
  }
}

export default TeamShow;
