const express = require('express');
const EnterpriseController = require('./controllers/EnterpriseController');
const ServiceController = require('./controllers/ServiceController');

const routes = express.Router();

// Enterprise routes
routes.get('/enterprises', EnterpriseController.index);
routes.post('/enterprises', EnterpriseController.store);
// Service routes
routes.post('/services', ServiceController.store);
routes.get('/services', ServiceController.index);
routes.delete('/services/:id', ServiceController.delete);

module.exports = routes;