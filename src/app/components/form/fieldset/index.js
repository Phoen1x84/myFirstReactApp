import React, { Component } from 'react';

export default class Fieldset extends React.Component {
  render() {
    return <fieldset>{this.props.children}</fieldset>;
  }
}
