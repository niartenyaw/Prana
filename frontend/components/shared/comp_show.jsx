import React from 'react';
import TaskIndexContainer from '../task/task_index_container';

class CompShow extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleTaskClose = this.handleTaskClose.bind(this);
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
        .then(() => {
          if (this.props.type === "taskdetail") {
            this.props.history.push(this.taskCloseUrl())
          }
          else {
            this.props.history.push("/dashboard")
          }
        });
    }
  }

  taskCloseUrl() {
    return this.props.match.url.split("/").slice(0,3).join("/");
  }

  handleTaskClose() {
    this.props.history.push(this.taskCloseUrl());
  }

  render() {
    const CompFormContainer = this.props.form;
    const type = this.props.type;

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
          {
            type === "taskdetail" ? (
              <div className="taskdetail-close-button-container">
                <button
                  className="taskdetail-close-button"
                  onClick={this.handleTaskClose}><img src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495732364/close-cross_wv6b1w.png" alt="close-symbol" /></button>
              </div>
            ) : ("")
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
