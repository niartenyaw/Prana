import React from 'react';

class TeamForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.currentTeam);
    this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidMount() {
    if (this.props.match.path === "/teams/new") {
      this.nameInput.focus();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.currentTeam);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleOnBlur();
  }

  handleOnBlur() {
    if (this.state.id) {
      this.props.patchTeam(this.state)
        .fail(errors => this.props.receiveTeamErrors(errors.responseJSON));
    }
    else {
      this.props.postTeam(this.state)
        .then(resp => this.props.history.push(`/teams/${resp.currentTeam.id}`),
          errors => this.props.receiveTeamErrors(errors.responseJSON));
    }
  }

  render() {
    const name = this.props.currentTeam.name === "" ? (
      "Team"
    ) : (
      this.props.currentTeam.name
    );

    return (
        <section className="team-form">
          <form
            key={this.props.currentTeam.id}
            onSubmit={this.handleSubmit} >
            <input
              className="name-input form-input"
              ref={(input) => { this.nameInput = input; }}
              type="text"
              onChange={this.handleChange("name")}
              onBlur={this.handleOnBlur}
              placeholder={name}
              value={this.state.name}></input>
          </form>
        </section>
    );
  }
}

export default TeamForm;
