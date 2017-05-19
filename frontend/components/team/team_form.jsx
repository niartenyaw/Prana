import React from 'react';

class TeamForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.currentTeam);
    this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.currentTeam);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value }, () => {
        if (this.state.id) {
          this.props.patchTeam(this.state);
        }
        else {
          this.props.postTeam(this.state)
            .then(resp => this.props.history.push(`/teams/${resp.currentTeam.id}`));
        }
      });
    };
  }

  render() {
    return (
      <div>
        <section className="team-show">
          <h2 className="team-show-header">
            Tasks for {this.props.currentTeam.name}
          </h2>
        </section>
        <form key={this.props.currentTeam.id}>
          <label>Team Name
            <input
              autofocus="autofocus"
              type="text"
              onChange={this.handleChange("name")}
              value={this.state.name}></input>
          </label>
        </form>
      </div>
    );
  }
}

export default TeamForm;
