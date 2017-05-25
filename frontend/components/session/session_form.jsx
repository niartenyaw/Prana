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

  handleGuestSignin(e) {
    e.preventDefault();

    const defaultUser = {
      email: "guest@guest.com",
      password:"password"
    };
    this.props.guestSignin(defaultUser)
      .then(() => this.props.history.push("/dashboard"));
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value })
  }

  render() {
    const path = this.props.match.path;
    const text = path === "/signin" ? "Sign In" : "Sign Up";
    return (
      <section className="form-container">

        <div className="form-header">
          <h3 id="form-title">{text}</h3>
        </div>

        <form className="session-form" onSubmit={e => this.handleSubmit(e)}>

          {(path === "/signup") ? (<label><span>Name</span>
            <input type="text"
              value={this.state.name}
              onChange={this.handleChange("name")} ></input>
          </label>) : (
            ""
          )}

          <label><span>Email</span>
            <input type="text"
              value={this.state.email}
              onChange={this.handleChange("email")} ></input>
          </label>

          <label><span>Password</span>
            <input type="password"
              value={this.state.password}
              onChange={this.handleChange("password")} ></input>
          </label>

          <div className="submit-buttons">

            <input className="button" type="submit" value={text} />
            <button className="button"
              onClick={(e) => this.handleGuestSignin(e)} >Guest Sign In</button>

          </div>

        </form>
        <ul className="session-errors">
          { this.props.errors.map(err => <li key={err}>{err}</li>)}
        </ul>
      </section>
    );
  }
};

export default SessionForm;
