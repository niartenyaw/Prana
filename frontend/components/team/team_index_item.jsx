import React from 'react';

const TeamIndexItem = ({ team }) => (
    <li className="team-index-item" key={team.name}>
      {team.name}
    </li>
);

export default TeamIndexItem;
