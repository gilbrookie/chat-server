const BPromise = require('bluebird');
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
    return BPromise.resolve({ id });
  },

  findAll: () => {
    return BPromise.resolve([{}]);
  },

  update: (id, updateData) => {
    if (!id || !updateData) {
      return new VError('Missing parameter');
    }
    return BPromise.resolve({ id, updateData });
  },

  destroy: (id) => {
    if (!id) {
      return new VError('Missing id parameter');
    }
    return BPromise.resolve(null);
  },
};
