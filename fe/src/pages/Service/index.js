import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import awsLogo from '../../assets/awsLogo.png';

const Service = () => (
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
      <form>
        <input placeholder="Service" />
        <textarea placeholder="Description" />
        <input placeholder="Value" />
        <button className="button" type="submit">
          Save
        </button>
      </form>
    </div>
  </div>
);

export default Service;
