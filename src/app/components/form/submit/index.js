import React, { Component } from 'react';

// example of stateless component
const Submit = (props) => {
  return (
    <input type="submit" value={props.value} className={props.className} />
  );
};

export default Submit;
