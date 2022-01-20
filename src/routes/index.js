const routes = require('express').Router();
const about = require('../controllers/about');
const get = require('../controllers/get');

routes.get('/', get);

routes.get( '/about', about);


module.exports = routes; 