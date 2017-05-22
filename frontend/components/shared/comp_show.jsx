import React from 'react';

class CompShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.receiveCurrent(this.props.current);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.current.id !== this.props.current.id) {
      this.props.receiveCurrent(newProps.current);
    }
  }

  handleClick() {
    const name = this.props.current.name
    if (confirm(`Are you sure you want to delete ${name}`)) {
      this.props.deleteComp(this.props.current.id)
        .then(this.props.history.push("/dashboard"));
    }
  }

  render() {
    const CompFormContainer = this.props.form;
    const type = this.props.type;
    return (
      <section className="comp-show">
        <div className="comp-header">
          <CompFormContainer />
          {this.props.match.path === `/${type}s/new` ? ("") : (
            <div className="button-container">
              <button className="button" onClick={this.handleClick}>Delete</button>
            </div>
          )}
        </div>
        <div className="errors-container">
          <ul className="errors-list">
            {this.props.errors.map(err => <li key={err}>{err}</li>)}
          </ul>
        </div>
      </section>
    );
  }
}

export default CompShow;
