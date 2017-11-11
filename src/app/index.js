import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!');
}

ReactDOM.render(
  <h1>hello world!</h1>,
  document.getElementById('root')
);

