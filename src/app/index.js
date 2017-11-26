import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './boot/app.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!');
}

ReactDOM.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>,
  document.getElementById('root'));
 