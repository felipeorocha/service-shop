import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import awsLogo from '../../assets/awsLogo.png';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [wpp, setWpp] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name,
      email,
      wpp,
      cnpj,
      city,
      uf,
    };

    try {
      const response = await api.post('enterprises', data);
      console.log('register', response);
      alert(`Your user id: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
            <FiArrowLeft size={16} color="#fc9802" />
            Sign In
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enterprise name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Contact"
            value={wpp}
            onChange={e => setWpp(e.target.value)}
          />
          <input
            placeholder="CNPJ"
            value={cnpj}
            onChange={e => setCnpj(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
