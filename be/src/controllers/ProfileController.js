const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const enterprise_id = req.headers.authorization;

    if (!enterprise_id) {
      return res.status(400).json({ error: 'Enterprise authorization required.' });
    }

    const services = await connection('services').where('enterprise_id', enterprise_id).select('*');
    console.log("servicesProfile: ", services);

    return res.json(services);
  }
}