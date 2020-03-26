const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { title, description, value } = req.body;
    const enterprise_id = req.headers.authorization;

    if (!enterprise_id) {
      return res.status(400).json({ error: 'Enterprise authorization required.' });
    }
    // const result = await connection('services').insert({
    const [id] = await connection('services').insert({
      title,
      description,
      value,
      enterprise_id
    });
    // const id = result[0];

    return res.json({ id });
  },

  async index(req, res) {
    const services = await connection('services').select('*');

    return res.json(services);
  },

  async delete(req, res) {
    const { id } = req.params;
    const enterprise_id = req.headers.authorization;

    if (!enterprise_id) {
      return res.status(400).json({ error: 'Enterprise authorization required.' });
    }

    const service = await connection('services').where('id', id).select('enterprise_id').first();

    if (service.enterprise_id !== enterprise_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('services').where('id', id).delete();

    return res.status(204).send();
  }
}