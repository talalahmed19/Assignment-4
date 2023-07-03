import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, age, isAdmin }) => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <p>Admin user</p>}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool,
};

export default User;
