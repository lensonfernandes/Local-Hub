import React, { useState } from 'react';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom';

import {db, auth} from './utils/firebase';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleLogin = async (e) => {
    e.preventDefault()
     
    await createUserWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/home")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your login logic here, such as making an API call
    auth.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful login
      const user = userCredential.user;
      console.log('Logged in:', user);
    })
    .catch((error) => {
      // Handle login error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Login error:', errorCode, errorMessage);
    });
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
