const uuidV4 = require('uuid/v4');
const UserService = require('../lib/UserService');
const { User } = require('../lib/db');

describe('UserService Tests', () => {
  test('Create a user', () => {
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

  test('Update a user', () => {
    const obj = {
      id: uuidV4(),
      email: `test+${uuidV4()}@example.com`,
    };
    return UserService.update(obj.id, { email: obj.email })
      .then((res) => {
        expect(res).toHaveProperty('id', obj.id);
        expect(res).toHaveProperty('updateData', { email: obj.email });
      });
  });

  test('Find a user', () => {
    const id = uuidV4();
    return UserService.findOne(id)
      .then(res => expect(res).toHaveProperty('id', id));
  });

  test('Delete a user', () => {
    return UserService.destroy(uuidV4())
      .then(res => expect(res).toBe(null));
  });
});
