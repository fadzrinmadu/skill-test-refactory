import './App.css';
import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar/index.js';
import LoginForm from './components/LoginForm/index.js';
import UserInformation from './components/UserInformation/index.js';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
    };

    getUser();
  }, []);

  console.log(user);

  return (
    <>
      <header>
        <Navbar user={user} />
      </header>
      <main>
        {Object.keys(user).length !== 0 ? (
          <UserInformation user={user} />
        ) : (
          <LoginForm />
        )}
      </main>
    </>
  );
}

export default App;
