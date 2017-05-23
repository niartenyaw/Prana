import React from 'react';

import { Link } from 'react-router-dom';

class CompIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllComps();
  }

  render() {
    const CompIndexItemContainer = this.props.CompIndexItemContainer;
    const type = this.props.type;
    const title = type.charAt(0).toUpperCase() + type.slice(1);
    return (
      <section className={`${type}-index`}>
        { type === "task" ? (
          ""
        ) : (
          <div className="comp-index-header">
            <h4>{`${type}s`}</h4>
            <Link to={`/${type}s/new`}>
              <img
                className="plus-button"
                src="https://res.cloudinary.com/dbxwu45pr/image/upload/v1495232281/white-plus-button_yvdzi8.png" />
              </Link>
          </div>
        ) }
        <ul>
          {
            this.props.allComps.map(comp => <CompIndexItemContainer
            comp={comp}
            key={`${type}${comp.id}${comp.name}`} />)
          }
        </ul>
      </section>
    );
  }
}

export default CompIndex;
