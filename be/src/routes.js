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
routes.delete('/enterprises/:id', authMiddleware, EnterpriseController.delete);
// Service routes
routes.post('/services', authMiddleware, ServiceController.store);
routes.get('/services', ServiceController.index);
routes.delete('/services/:id', authMiddleware, ServiceController.delete);
// Profile route
routes.get('/profile', authMiddleware, ProfileController.index);

module.exports = routes;