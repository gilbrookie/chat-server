const uuidV4 = require('uuid/v4');
const UserService = require('../lib/UserService');
const { User } = require('../lib/db');

describe('UserService Tests', () => {
  test('Create a user, with a uuid', () => {
    const obj = {
      id: uuidV4(),
      email: `test+${uuidV4()}@example.com`,
      name: 'Test User',
    };

    return UserService.create(obj)
      .then((res) => {
        expect(res).toBeInstanceOf(User);
        expect(res.id).toEqual(obj.id);
        expect(res.email).toEqual(obj.email);
        expect(res.name).toEqual(obj.name);
      });
  });

  test('create a user without a uuid (auto-generate)', () => {});
  test('create user with email that already exists', () => {});

  test('Update a user', () => {
    const obj = {
      id: uuidV4(),
      email: `test+${uuidV4()}@example.com`,
      name: 'Test User',
    };
    const newEmail = `test+MODIFIED+${uuidV4()}@example.com`;

    return UserService.create(obj)
      .then(() => UserService.update(obj.id, { email: newEmail }))
      .then(() => UserService.findOne(obj.id))
      .then((res) => {
        expect(res.id).toEqual(obj.id);
        expect(res.email).toEqual(newEmail);
      });
  });

  test('update a user that doesn\'t exist', () => {});
  test('update a user\'s email to one that already exists', () => {});
  test('update a user\'s id to one that already exists', () => {});

  test('Find a user', () => {
    const obj = {
      id: uuidV4(),
      email: `test+${uuidV4()}@example.com`,
      name: 'Test User',
    };
    return UserService.create(obj)
      .then(user => UserService.findOne(user.id))
      .then(res => expect(res.id).toEqual(obj.id));
  });

  test('Delete a user', () => {
    const obj = {
      id: uuidV4(),
      email: `test+${uuidV4()}@example.com`,
      name: 'Test User',
    };
    return UserService.create(obj)
      .then(user => UserService.destroy(user.id))
      .then(res => expect(res).toEqual(1))
      .then(() => UserService.findOne(obj.id))
      .then(res1 => expect(res1).toBeNull());
  });
});
