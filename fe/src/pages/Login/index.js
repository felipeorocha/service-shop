import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import awsImg from '../../assets/aws.png';
import awsLogo from '../../assets/awsLogo.png';

const Login = () => {
  const [id, setId] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ENTERPRISE_ID', id);
      localStorage.setItem('ENTERPRISE_NAME', response.data.enterprise.name);
      localStorage.setItem('ENTERPRISE_TOKEN', response.data.token);
      history.push('profile');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={awsLogo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            placeholder="Enterprise ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>
          <Link className="redirect-link" to="/signup">
            <FiLogIn size={16} color="#fc9802" />
            Sign Up
          </Link>
        </form>
      </section>
      <img src={awsImg} alt="aws" />
    </div>
  );
};

export default Login;
