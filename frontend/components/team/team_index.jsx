import React from 'react';
import TeamIndexItemContainer from './team_index_item_container';
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
            <img className="plus-button" src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495232281/white-plus-button_yvdzi8.png" />
            </Link>
        </div>
        <ul>
          {
            this.props.allTeams.map(team => <TeamIndexItemContainer
            team={team}
            key={`${team.id}${team.name}`} />)
          }
        </ul>
      </section>
    );
  }
}

export default TeamIndex;
