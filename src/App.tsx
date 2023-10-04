import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList'; 
import UserTile from './components/UserTile'; 
import usersData, { User } from './components/usersData'; 

function App() {
  const [viewMode, setViewMode] = useState<'list' | 'tiles'>('list');
  const users: User[] = usersData;

  return (
    <div className="App">
      <h1>User List</h1>
      <div className="view-mode">
        <button onClick={() => setViewMode('list')}>List</button>
        <button onClick={() => setViewMode('tiles')}>Tiles</button>
      </div>
      {viewMode === 'list' ? (
        <UserList users={users} /> 
      ) : (
        <div className="user-tiles">
          {users.map((user) => (
            <UserTile key={user.id} user={user} /> 
          ))}
        </div>
      )}
    </div>
  );
}

export default App;