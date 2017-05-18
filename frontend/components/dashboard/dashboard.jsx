import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getAllTeams();
  }

  render() {
    return (
      <div className="dashboard">
        <Link to="/teams">Teams</Link>
      </div>
    );
  }
}

export default Dashboard;
