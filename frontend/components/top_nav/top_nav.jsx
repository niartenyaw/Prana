import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {

  handleSignout(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.signout()
      .then(this.props.history.push("/signin"));
  }

  render() {
    console.log(this.props);
    return (
      <nav className="top-nav">
        <h1>Welcome to Prana!</h1>
        {!this.props.currentUser ? (
          <div className="session-links">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        ) : (
          <button onClick={(e) => this.handleSignout(e)}>Sign Out</button>
        )}
      </nav>
    );
  }
}

export default TopNav;
