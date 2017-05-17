import React from 'react';
import SessionFormContainer from '../session/session_form_container';

class Splash extends React.Component {

  render() {
    const path = this.props.match.path;
    const text = path === "/signin" ? "Sign In" : "Sign Up";
    return (
      <div className="hero-container">
        <section className="hero-text">
          <h1>Move Work Forward</h1>
          <h4>Prana is the easiest way for teams to track their work—and get results.</h4>
        </section>
        <SessionFormContainer />
      </div>
    );
  }
};

export default Splash;
