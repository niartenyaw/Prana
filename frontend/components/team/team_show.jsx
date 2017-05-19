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
          <div>
          </div>
        </div>
        <ul className="errors-list">
          {this.props.errors.map(err => <li>{err}</li>)}
        </ul>
      </section>
    );
  }
}

export default TeamShow;
