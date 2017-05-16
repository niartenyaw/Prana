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
    return (
      <nav className="top-nav">
        <img id="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/3D_Geometrical_Figures_19.png" />
        {!this.props.currentUser ? (
          <ul className="session-links">
            <li className="button"><Link to="/signin">Sign In</Link></li>
            <li className="button"><Link to="/signup">Sign Up</Link></li>
          </ul>
        ) : (
          <button onClick={(e) => this.handleSignout(e)}>Sign Out</button>
        )}
      </nav>
    );
  }
}

export default TopNav;
