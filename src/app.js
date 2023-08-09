const fastify = require('fastify')({ logger: true });
const userRoutes = require('./routes/userRoutes');

// Register CORS plugin
fastify.register(require('@fastify/cors'), {
  // Put your options here
  origin: "*", // Allow all origins (not recommended for production)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});

// Register routes
fastify.register(userRoutes);



const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

const { sequelize } = require('./models');
sequelize.sync()
  .then(() => {
    // 启动服务器的代码
    start();
  });