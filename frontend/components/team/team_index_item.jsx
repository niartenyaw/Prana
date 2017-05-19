import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const TeamIndexItem = ({ team }) => (
  <li className="team-index-item">
    <Link to={`/teams/${team.id}`}>{team.name}</Link>
  </li>
);

export default TeamIndexItem;
