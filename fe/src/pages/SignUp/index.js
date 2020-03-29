import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import awsLogo from '../../assets/awsLogo.png';

const SignUp = () => (
  <div className="register-container">
    <div className="content">
      <section>
        <img src={awsLogo} alt="servicesLogo" />
        <h1>Cadastro</h1>
        <p>
          Faça seu caddastro e aproveite das mais variadas vantagens
          tecnologicas
        </p>
        <Link className="redirect-link" to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Sign In
        </Link>
      </section>
      <form>
        <input placeholder="Enterprise name" />
        <input type="email" placeholder="E-mail" />
        <input placeholder="Contact" />
        <div className="input-group">
          <input placeholder="City" />
          <input placeholder="UF" style={{ width: 80 }} />
        </div>
        <button className="button" type="submit">
          SignUp
        </button>
      </form>
    </div>
  </div>
);

export default SignUp;
