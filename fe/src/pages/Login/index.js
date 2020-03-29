import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import awsImg from '../../assets/aws.png';
import awsLogo from '../../assets/awsLogo.png';

const Login = () => (
  <div className="login-container">
    <section className="form">
      <img src={awsLogo} alt="logo" />
      <form>
        <h1>Login</h1>
        <input placeholder="Enterprise ID" />
        <button className="button" type="submit">
          Login
        </button>
        <Link className="redirect-link" to="/signup">
          <FiLogIn size={16} color="#E02041" />
          Sign Up
        </Link>
      </form>
    </section>
    <img src={awsImg} alt="aws" />
  </div>
);

export default Login;
