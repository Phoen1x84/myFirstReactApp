import React, { Component } from 'react';

export default class Label extends React.Component {
  render() {
    return <label htmlFor={this.props.for}>{this.props.text}</label>;
  }
}
