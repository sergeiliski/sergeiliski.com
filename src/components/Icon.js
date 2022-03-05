import React, { Component } from 'react';

export class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, name, type, short } = this.props;
    return (
      <>
        {icon && <i className={`fab ${icon}`}></i>}
        {!icon && <div className={`list-inline-icon-${type}`}>{short}</div>}
        <p className="list-inline-item-text">{name}</p>
      </>
    );
  }
}

export default Icon;
