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
      <div className="form-container">
        <form className="session-form" onSubmit={e => this.handleSubmit(e)}>
          <h1 id="form-title">{text}</h1>
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
          <input className="button" type="submit" value={text} />
        </form>
      </div>
    );
  }
};

export default SessionForm;
