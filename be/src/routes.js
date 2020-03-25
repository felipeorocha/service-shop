const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');

const routes = express.Router();

routes.get('/enterprises', async (req, res) => {
  const enterprises = await connection('enterprises').select('*');

  return res.json(enterprises);
});

routes.post('/enterprises', async (req, res) => {
  const { name, email, wpp, cnpj, city, uf } = req.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('enterprises').insert({
    id,
    name,
    email,
    wpp,
    cnpj,
    city,
    uf
  });

  return res.json({ id });
});

module.exports = routes;