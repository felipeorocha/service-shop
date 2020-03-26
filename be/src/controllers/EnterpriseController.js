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
  },

  async update(req, res) {
    const { name, email } =  req.body;

    const enterpriseData = await connection('enterprises').where('id', req.userIdToken).select('name', 'email');

    const [enterprise] = enterpriseData;

    if (name && name === enterprise.name) {
      const enterpriseExists = await connection('enterprises').where('name', name).select('*');

      if (enterpriseExists) {
        return res.status(400).json({ error: "User already exists. No name changes." });
      }
    }

    if (email && email === enterprise.email) {
      const enterpriseExists = await connection('enterprises').where('email', email).select('*');

      if (enterpriseExists) {
        return res.status(400).json({ error: "User already exists. No email changes." });
      }
    }

    await connection('enterprises').update({ name, email }).where('id', req.userIdToken);

    return res.json({ success: true });
  }
}