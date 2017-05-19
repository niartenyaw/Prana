import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class TeamIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/teams/${this.props.team.id}`);
    this.props.resetErrors();
  }

  render() {
    const team = this.props.team;
    return (
      <li className="team-index-item">
        <button onClick={this.handleClick}>{team.name}</button>
      </li>
    );
  }
}

export default TeamIndexItem;
