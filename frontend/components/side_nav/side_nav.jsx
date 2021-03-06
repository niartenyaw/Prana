import React from 'react';
import TeamIndexContainer from '../team/team_index_container';
import ProjectIndexContainer from '../project/project_index_container';
import UserIndexContainer from '../user/user_index_container';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="side-nav">
        <UserIndexContainer />
        <TeamIndexContainer />
        { this.props.currentTeam.id ? <ProjectIndexContainer /> : "" }
      </section>
    );
  }
}

export default SideNav;
