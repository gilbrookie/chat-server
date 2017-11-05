
const Sequelize = require('sequelize');

const sequelize = new Sequelize('chatserver', 'docker', 'docker', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = sequelize.define('user', {
  id: { type: Sequelize.UUID, primaryKey: true },
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

module.exports = {
  User,
  Sequelize,
};
