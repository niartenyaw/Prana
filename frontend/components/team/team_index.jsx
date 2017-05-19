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
        <h4 className="teams-index-header">Teams</h4>
        <ul>
          {this.props.allTeams.map(team => <TeamIndexItem key={team.id} team={team} />)}
        </ul>
      </section>
    );
  }
}

export default TeamIndex;
