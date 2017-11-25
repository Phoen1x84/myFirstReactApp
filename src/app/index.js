import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// components
import Submit from './components/form/submit';

if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!');
}

class App extends React.Component {
  render() {
    return (
      // <Router history={browserHistory}>
      //   <Route exact path="/" Component={Submit} />
      //   <Route path="about" Component={Submit} />
      // </Router>      
      <div>
        <h1>hello world</h1>     
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
