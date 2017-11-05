const VError = require('verror');

const { User } = require('./db');

module.exports = {
  create: (data) => {
    if (!data) {
      return new VError('Missing required data parameter');
    }
    return User.sync()
      .then(() => User.create(data));
  },

  findOne: (id) => {
    if (!id) {
      return new VError('Missing id parameter');
    }
    return User.findById(id);
  },

  findAll: () => User.findAll(),

  update: (id, updateData) => {
    if (!id || !updateData) {
      return new VError('Missing parameter');
    }
    return User.update(updateData, {
      where: { id },
    });
  },

  destroy: (id) => {
    if (!id) {
      return new VError('Missing id parameter');
    }
    return User.destroy({ where: { id } });
  },
};
