import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CompIndexItem extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/${this.props.type}s/${this.props.comp.id}`);
    this.props.resetErrors();
  }

  render() {
    const comp = this.props.comp;
    return (
      <li className="comp-index-item">
        { this.props.type === "task" ? (
          <button onClick={this.handleClick}>{comp.name}</button>
        ) : (
          <button onClick={this.handleClick}>{comp.name}</button>
        )}
      </li>
    );
  }
}

export default CompIndexItem;
