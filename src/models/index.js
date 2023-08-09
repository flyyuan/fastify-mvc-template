const Sequelize = require('sequelize');
const config = require('../../config/config.json')['development']; // 根据环境选择配置
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const User = require('./user')(sequelize, Sequelize.DataTypes);
module.exports = {
  sequelize,
  Sequelize,
  User
};
