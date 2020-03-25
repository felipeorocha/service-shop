const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
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
  },

  async index(req, res) {
    const enterprises = await connection('enterprises').select('*');

    return res.json(enterprises);
  }
}