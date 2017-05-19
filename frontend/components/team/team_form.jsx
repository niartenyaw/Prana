import React from 'react';

class TeamForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.currentTeam);
    this.handleChange.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
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
        <section className="team-form">
          <form key={this.props.currentTeam.id}>
            <input
              className="name-input"
              ref={(input) => { this.nameInput = input; }}
              type="text"
              onChange={this.handleChange("name")}
              placeholder="Team name"
              value={this.state.name}></input>
          </form>
        </section>
    );
  }
}

export default TeamForm;
