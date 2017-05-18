import React from 'react';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllTeams();
  }

  render() {
    return (
      <section className="teams-index">
        <ul>
          {this.props.allTeams.map(team => <TeamIndexItem key={team.id} team={team} />)}
        </ul>
      </section>
    );
  }
}

export default TeamIndex;
