import React from 'react';

class CompForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.current);
    this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
        .then(resp => this.props.history.push(`/${this.props.type}s/${resp.current.id}`),
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

  render() {
    const name = this.props.current.name === "" ? (
      `${this.props.type}`
    ) : (
      this.props.current.name
    );

    const type = this.props.type;

    return (
        <section className={`${type}-form`}>
          <form
            key={this.props.current.id}
            onSubmit={this.handleSubmit} >
            <input
              className={`${type}-name-input ${type}-form-input`}
              ref={(input) => { this.nameInput = input; }}
              type="text"
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange("name")}
              onBlur={this.handleOnBlur}
              placeholder={name}
              value={this.state.name}></input>
          </form>
        </section>
    );
  }
}

export default CompForm;
