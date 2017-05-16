import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.nullState();

    this.handleSubmit.bind(this);
  }

  nullState() {
    return {
      name: "",
      email: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    const path = this.props.match.path
    const text = path === "/signin" ? "Sign In" : "Sign Up";
    return (
      <form className="session-form" onSubmit={e => this.handleSubmit(e)}>
        {(path === "/signup") ? (<label>Name
          <input type="text"
            value={this.state.name}
            onChange={this.handleChange("name")} ></input>
        </label>) : (
          ""
        )}
        <label>Email
          <input type="text"
            value={this.state.email}
            onChange={this.handleChange("email")} ></input>
        </label>
        <label>Password
          <input type="password"
            value={this.state.password}
            onChange={this.handleChange("password")} ></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
};

export default SessionForm;
