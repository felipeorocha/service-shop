import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import awsLogo from '../../assets/awsLogo.png';

const Service = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const enterpriseToken = localStorage.getItem('ENTERPRISE_TOKEN');

  const data = {
    title,
    description,
    value,
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await api.post('services', data, {
        headers: {
          Authorization: `Bearer ${enterpriseToken}`,
        },
      });
      console.log('service', response);

      history.push('/profile');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="service-container">
      <div className="content">
        <section>
          <img src={awsLogo} alt="servicesLogo" />
          <h1>Service registration</h1>
          <p>Add your service&apos;s specifics detail</p>
          <Link className="redirect-link" to="/profile">
            <FiArrowLeft size={16} color="#fc9802" />
            Home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Service"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Value"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Service;
