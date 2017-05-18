import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.getAllTeams();
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard!</h1>
      </div>
    );
  }
}

export default Dashboard;
