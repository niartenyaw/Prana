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
    const type = this.props.type;
    const Container = this.props.Container;
    return (
      <li className={`${type}-index-item`}>
        { type === "task" ? (
          <Container comp={this.props.comp} projectId={this.props.projectId} />
        ) : (
          <button onClick={this.handleClick}>{comp.name}</button>
        ) }
      </li>
    );
  }
}

export default CompIndexItem;
