import React from 'react';

class CompForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = Object.assign({}, this.props.current);
    this.handleChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
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
    this.handleOnBlur();
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

  render() {
    const name = this.props.current.name === "" ? (
      `${this.props.type}`
    ) : (
      this.props.current.name
    );

    return (
        <section className={`${this.props.type}-form`}>
          <form
            key={this.props.current.id}
            onSubmit={this.handleSubmit} >
            <input
              className="name-input form-input"
              ref={(input) => { this.nameInput = input; }}
              type="text"
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
