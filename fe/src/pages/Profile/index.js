import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import awsLogo from '../../assets/awsLogo.png';

const Profile = () => (
  <div className="profile-container">
    <header>
      <img src={awsLogo} alt="awsLogo" />
      <span>Welcome to services</span>
      <Link className="button" to="/services/new">
        Add service
      </Link>
      <button type="button">
        <FiPower size={18} color="#fc9802" />
      </button>
    </header>
    <h1>Services</h1>
    <ul>
      <li>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <button type="button">
          <FiTrash2 size={20} color="a8a8b3" />
        </button>
      </li>
      <li>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <button type="button">
          <FiTrash2 size={20} color="a8a8b3" />
        </button>
      </li>
      <li>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <button type="button">
          <FiTrash2 size={20} color="a8a8b3" />
        </button>
      </li>
      <li>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <strong>Sercvice</strong>
        <p>Descripton</p>
        <button type="button">
          <FiTrash2 size={20} color="a8a8b3" />
        </button>
      </li>
    </ul>
  </div>
);

export default Profile;
