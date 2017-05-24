import React from 'react';

class CompForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.current);
    this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  componentDidMount() {
    if (this.props.match.path === `/${this.props.type}s/new`) {
      this.nameInput.focus();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.current);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleOnBlur() {
    if (this.state.id) {
      this.props.patchComp(this.state)
        .fail(errors => this.props.receiveErrors(errors.responseJSON));
    }
    else {
      this.props.postComp(this.state)
        .then(resp => {
          if (this.props.type !== "task") {
            this.props.history.push(`/${this.props.type}s/${resp.current.id}`);
          }
        },
          errors => this.props.receiveErrors(errors.responseJSON));
    }
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.nameInput.blur();
    }

    if (e.key === "Escape") {
      this.setState({ name: this.props.current.name },
        () => this.nameInput.blur());
    }
  }

  handleFocus() {
    if (this.props.type === "task" && this.props.current.id) {
      this.props.history.push(`${this.props.match.url}/tasks/${this.props.current.id}`);
    }
  }

  handleFinish(e) {
    this.setState({ finished: true }, () => this.handleOnBlur())
  }

  render() {
    const name = this.props.current.name === "" ? (
      `${this.props.type}`
    ) : (
      this.props.current.name
    );

    const type = this.props.type;
    const currId = this.props.current.id;

    return (
        <section className={`${type}-form-container`}>
          <form
            className="task-form"
            key={currId}
            onSubmit={this.handleSubmit} >
            <input
              className={`${type}-name-input ${type}-form-input`}
              ref={(input) => { this.nameInput = input; }}
              type="text"
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange("name")}
              onFocus={this.handleFocus}
              onBlur={this.handleOnBlur}
              placeholder={name}
              value={this.state.name} />
              { type === "task" && currId ? (
                  <input
                    className="finished-button"
                    type="checkbox"
                    checked={this.state.finished}
                    onChange={this.handleFinish} />
              ) : ("")}
          </form>
        </section>
    );
  }
}

export default CompForm;
