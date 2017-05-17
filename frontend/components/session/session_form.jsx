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
      .then(() => this.props.history.push("/dashboard"));
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    const path = this.props.match.path
    const text = path === "/signin" ? "Sign In" : "Sign Up";
    return (
      <div className="hero-container">
        <section className="hero-text">
          <h1>Move Work Forward</h1>
          <h4>Prana is the easiest way for teams to track their work—and get results.</h4>
        </section>
        <section className="form-container">
          <form className="session-form" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-header">
              <h3 id="form-title">{text}</h3>
            </div>
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
        </section>
      </div>
    );
  }
};

export default SessionForm;
