import './style.css';
import React from 'react';

function UserInformation({ user }) {
  return (
    <div className="container">
      <div className="card">
        <h2 className="heading">Your Account</h2>
        <ul className="user-information">
          <li className="user-information-item">
            <p className="user-information-label">Nama</p>
            <p className="user-information-text">{user.name}</p>
          </li>
          <li className="user-information-item">
            <p className="user-information-label">Email</p>
            <p className="user-information-text">{user.email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserInformation;
