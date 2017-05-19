import React from 'react';
import TeamIndexItem from './team_index_item';
import { Link } from 'react-router-dom';

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
        <div className="teams-index-header">
          <h4>Teams</h4>
          <Link to="/teams/new">
            <img className="plus-button" src="assets/white-plus-button.png" />
            </Link>
        </div>
        <ul>
          {
            this.props.allTeams.map(team => <TeamIndexItem
            team={team}
            key={`${team.id}${team.name}`} />)
          }
        </ul>
      </section>
    );
  }
}

export default TeamIndex;
