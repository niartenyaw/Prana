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

  handleChange(inputType) {
    return e => {
      this.setState({ [inputType]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleOnBlur() {
    if (this.state.id) {
      this.patch();
    }
    else {
      this.post();
    }
  }

  patch() {
    this.props.patchComp(this.state)
      .fail(() => {
        this.setState({ name: this.props.current.name })
      });
  }

  post() {
    this.props.postComp(this.state)
      .then(resp => {
        if (this.props.type === "task") {
          const currUrl = this.props.match.url.split("/").slice(0,3).join("/");
          this.props.history.push(`${currUrl}/tasks/${resp.task.id}`);
        }
        else {
          this.props.history.push(`/${this.props.type}s/${resp.current.id}`);
        }
      });
  }

  handleKeyDown(type, input) {
    return e => {
      if (e.key === "Enter") {
        input.blur();
      }

      if (e.key === "Escape") {
        this.setState({ [type]: this.props.current[type] },
          () => input.blur());
      }
    };
  }

  handleFocus() {
    if (this.props.type === "task" && this.props.current.id) {
      this.props.history.push(`${this.props.match.url}/tasks/${this.props.current.id}`);
    }
  }

  handleFinish(e) {
    this.setState({ finished: !this.props.current.finished }, () => this.handleOnBlur())
  }

  render() {
    const name = this.props.current.name === "" ? (
      `${this.props.type}`
    ) : (
      this.props.current.name
    );

    const type = this.props.type;
    const currId = this.props.current.id;

    let crossout = "";

    if (type === "task") {
      crossout = `task-${this.props.current.finished}`;
    }

    return (
        <section className={`${type}-form-container ${crossout}`}>
          <form
            className={`${type}-form`}
            key={currId}
            onSubmit={this.handleSubmit} >
            <div className={`${type}-form-header`}>
              <input
                className={`${type}-name-input ${type}-form-input`}
                ref={(input) => { this.nameInput = input; }}
                type="text"
                onKeyDown={this.handleKeyDown("name", this.nameInput)}
                onChange={this.handleChange("name")}
                onFocus={this.handleFocus}
                onBlur={this.handleOnBlur}
                placeholder={`new ${name === "taskdetail" ? "task" : name}` }
                value={this.state.name} />
                {
                  (type === "task" || type === "taskdetail") && currId ? (
                    <input
                      className="finished-button"
                      type="checkbox"
                      checked={this.state.finished}
                      onChange={this.handleFinish} />
                  ) : ("")
                }
            </div>
              {
                type === "taskdetail" ? (
                  <textarea
                    className={`${type}-description-input ${type}-form-input`}
                    ref={(input) => { this.descInput = input; }}
                    type="text"
                    onKeyDown={this.handleKeyDown("description", this.descInput)}
                    onChange={this.handleChange("description")}
                    onFocus={this.handleFocus}
                    onBlur={this.handleOnBlur}
                    placeholder="description"
                    value={this.state.description} />
                ) : ("")
              }
          </form>
        </section>
    );
  }
}

export default CompForm;
