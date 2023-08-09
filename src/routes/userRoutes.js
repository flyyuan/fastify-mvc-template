const userController = require('../controllers/userController');

module.exports = function (fastify, opts, done) {
  fastify.get('/api/users', userController.getAllUsers);
  // Add other routes as needed
  done();
};
