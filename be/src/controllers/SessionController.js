const connection = require('../database/connection');

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    if (!id) {
      return res.status(401).json({ error: 'Enterprise ID is required' })
    }

    const enterprise = await connection('enterprises').where('id', id).select('name').first();

    if (!enterprise) {
      return res.status(400).json({ error: `No enterprise ${id} ID found.` });
    }

    return res.json(enterprise);
  }
}