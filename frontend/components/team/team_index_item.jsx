import React from 'react';
import { Link, Redirect } from 'react-router-dom';


// class TeamIndexItem extends React.Component {
//
//   constructor(props) {
//     super(props);
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     if (confirm(`Are you sure you want to delete team ${this.props.team.name}?`)) {
//       const id = this.props.team.id;
//       this.props.deleteTeam(id)
//       .then(() => {
//         if (this.props.match.params && this.props.match.params.teamId === id) {
//           <Redirect to="/dashboard" />
//         }
//       });
//     }
//   }
//
//   render() {
//     const team = this.props.team;
//     return (
//       <li className="team-index-item">
//         <Link to={`/teams/${team.id}`}>{team.name}</Link>
//         <button onClick={this.handleClick}>Delete</button>
//       </li>
//     );
//   }
// }

const TeamIndexItem = ({ team }) => (
  <li className="team-index-item">
    <Link to={`/teams/${team.id}`}>{team.name}</Link>
  </li>
);

export default TeamIndexItem;
