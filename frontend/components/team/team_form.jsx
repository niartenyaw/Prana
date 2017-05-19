import React from 'react';

class TeamForm extends React.Component {

  nullTeam() {
    return {
      name: ""
    };
  }

  constructor(props) {
    super(props);

    this.state = this.props.team || this.nullTeam();
    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

  handleChange(type) {
    return e => ths.setState({ [type]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <label>Team Name
          <input
            type="text"
            onChange={this.handleChange("name")}
            value={this.state.name}></input>
        </label>

        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default TeamForm;
