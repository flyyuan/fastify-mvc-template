const { User } = require('../models');


exports.getAllUsers = async (request, reply) => {
  try {
    const users = await User.findAll();
    reply.send(users);
  } catch (err) {
    console.log(err)
    reply.status(500).send({ error: 'Internal Server Error' });
  }
};

// Add other controller methods as needed
