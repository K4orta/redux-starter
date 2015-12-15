import React from 'react';
require('../../styles/main');

export default class Component extends React.Component {
  render() {
    return <div>{this.props.msg}</div>;
  }
}
