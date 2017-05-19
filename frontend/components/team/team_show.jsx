import React from 'react';

class TeamShow extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <section className="team-show">
        <h2 className="team-show-header">
          Tasks for {this.props.currentTeam.name}
        </h2>
      </section>
    );
  }
}

export default TeamShow;
