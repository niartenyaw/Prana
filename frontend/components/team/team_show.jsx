import React from 'react';

class TeamShow extends React.Component {

  componentWillMount() {

  }

  render() {
    const html = this.props.match.params.teamId === "new" ? "" : (
      <section className="team-show">
        <h2 className="team-show-header">
          Tasks for {this.props.currentTeam.name}
        </h2>
      </section>
    );

    return html;
  }
}

export default TeamShow;
