import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {

  handleSignout(e) {
    e.preventDefault();
    this.props.signout()
      .then(this.props.history.push("/"));
  }

  render() {
    return (
      <nav className="top-nav">
        <div className="logo-container">
          <img id="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/3D_Geometrical_Figures_19.png" />
          <h2>prana</h2>
        </div>

        {!this.props.currentUser ? (
          <div className="session-links">
            <Link to="/signin" className="button">Sign In</Link>
            <Link to="/signup" className="button">Sign Up</Link>
          </div>
        ) : (
          <div className="session-links">
            <button className="button" onClick={(e) => this.handleSignout(e)}>Sign Out</button>
          </div>
        )}
      </nav>
    );
  }
}

export default TopNav;
