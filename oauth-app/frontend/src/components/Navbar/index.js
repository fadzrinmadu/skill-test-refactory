import './style.css';
import React from 'react';
import Logo from '../../assets/images/refactory-logo-small.png';

function Navbar({ user }) {
  const actionLogout = (event) => {
    event.preventDefault();
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <a href="/#" ><img src={Logo} alt="Refactory Logo" width={100} /></a>
      </h1>
      <ul className="nav-list">
        {Object.keys(user).length !== 0 ? (
          <li className="nav-item">
            <span>{user.name}</span> | <a className="nav-link" href="/" onClick={actionLogout}>Logout</a>
          </li>
        ) : (
          <li className="nav-item">
            <span>Hello, Guest</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
