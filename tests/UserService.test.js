const UserService = require('../lib/UserService');

describe('UserService Tests', () => {
  test('Create a user', () => {
    expect(UserService.create()).toEqual(true);
  });

  test('Update a user', () => {
    expect(UserService.update()).toEqual(true);
  });

  test('Find a user', () => {
    expect(UserService.findOne()).toEqual(true);
  });

  test('Delete a user', () => {
    expect(UserService.destroy()).toEqual(true);
  });
});
