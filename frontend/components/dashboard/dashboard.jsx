import React from 'react';
import { Link } from 'react-router-dom';
import TaskIndexContainer from '../task/task_index_container';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllTeams();
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div className="dashboard">
        <h1>Hello {currentUser.name.split(" ")[0]}!</h1>
        <div className="inner-index-container">
          <TaskIndexContainer type="dashboard" />
        </div>
      </div>
    );
  }
}

export default Dashboard;
