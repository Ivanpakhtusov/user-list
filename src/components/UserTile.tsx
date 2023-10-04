import React from 'react';
import { User } from './usersData';

interface UserTileProps {
  user: User;
}

const UserTile: React.FC<UserTileProps> = ({ user }) => {
  return (
    <div className="user-tile">
      <div>{user.lastName} {user.firstName}</div>
      <div>{user.middleName}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );
};

export default UserTile;