const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Eminemin', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
