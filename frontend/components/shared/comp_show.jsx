import React from 'react';
import TaskIndexContainer from '../task/task_index_container';

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
    console.log(this.props.errors);

    const show = (
      <section className={`${type}-show`}>
        <div className={`${type}-header`}>
          <CompFormContainer type={type} comp={this.props.current} />
          {
            this.props.match.path === `/${type}s/new` ? ("") : (
              <div className="button-container">
                <button
                  className="button"
                  onClick={this.handleClick}>Delete</button>
              </div>
            )
          }
        </div>
        <div className="errors-container">
          <ul className="errors-list">
            {
              this.props.errors ? (
                this.props.errors.map(err => <li key={err}>{err}</li>)
              ) : ("")
            }
          </ul>
        </div>
          { type === "team" || type === "project" || type === "user" ? (
            <div className="inner-index-container">
              <TaskIndexContainer type={type} />
            </div>
          ) : (
            ""
          ) }
      </section>
    );

    if (type === "taskdetail") {
      return (
        <div className="inner-panel">
          { show }
        </div>
      );
    }

    return show;
  }
}

export default CompShow;
