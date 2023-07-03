import React from 'react';
import UserList from './UserList';

const App = () => {
  const users = [
    { name: 'Talal', age: 21, isAdmin: true },
    { name: 'Hanan', age: 22, isAdmin: false },
    { name: 'Soban', age: 24 },
  ];

  return (
    <div>
      <h1>User-defined based components</h1>
      <UserList users={users} />
    </div>
  );
};

export default App;
