import React, { Component } from 'react';

export default class Checkout extends React.Component {    
    render() {
        return (
            <input type="checkbox" 
                value={this.props.value} 
                id={this.props.id}
                name={this.props.name}
                checked={this.props.checked} />
        );
    }
}