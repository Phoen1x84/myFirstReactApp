import React, { Component } from 'react';

export default class Form extends React.Component {
  render() {
    return <form action="">{this.props.children}</form>;
  }
}
