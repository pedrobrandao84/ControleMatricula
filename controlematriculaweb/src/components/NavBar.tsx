// src/components/NavBar.tsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const NavBar: React.FC = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {isLoggedIn && (
          <React.Fragment>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><button onClick={logout}>Logout</button></li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
