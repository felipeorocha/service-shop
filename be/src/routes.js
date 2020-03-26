const express = require('express');
const EnterpriseController = require('./controllers/EnterpriseController');
const ServiceController = require('./controllers/ServiceController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

// routes.use(authMiddleware);

// Login route
routes.post('/sessions', SessionController.store);
// Enterprise routes
routes.get('/enterprises', EnterpriseController.index);
routes.post('/enterprises', EnterpriseController.store);
routes.put('/enterprises', authMiddleware, EnterpriseController.update);
// Service routes
routes.post('/services', ServiceController.store);
routes.get('/services', ServiceController.index);
routes.delete('/services/:id', ServiceController.delete);
// Profile route
routes.get('/profile', ProfileController.index);

module.exports = routes;