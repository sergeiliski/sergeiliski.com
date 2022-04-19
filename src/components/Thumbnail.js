import React, { Component } from 'react';

export class Thumbnail extends Component {

  render() {
    const { src } = this.props;
    return (
      <img alt="thumbnail" className="resume-thumbnail" src={src || 'https://picsum.photos/id/10/200/200'} style={{
        width: '200px',
      }}></img>
    );
  }
}

export default Thumbnail;
