import React from "react";
import { User } from "./usersData";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-list-item">
          <div className="name">
            {user.lastName} {user.firstName} {user.middleName}
          </div>
          <div className="email">{user.email}</div>
          <div className="phone">{user.phone}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
