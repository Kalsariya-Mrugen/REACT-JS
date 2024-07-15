import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      <h1>{name ? `Hello, ${name}!` : 'Welcome, guest!'}</h1>
    </div>
  );
};

export default Greeting;
