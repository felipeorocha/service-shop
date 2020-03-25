const express = require('express');
const EnterpriseController = require('./controllers/EnterpriseController');

const routes = express.Router();

routes.get('/enterprises', EnterpriseController.index);

routes.post('/enterprises', EnterpriseController.store);

module.exports = routes;