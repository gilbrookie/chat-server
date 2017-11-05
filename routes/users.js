const express = require('express');
const UserService = require('../lib/UserService');
const uuidv4 = require('uuid/v4');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  req.log.info('Calling Users GetAll()');
  return UserService.findAll()
    .then(users => res.send(users));
});


router.get('/:userId/', (req, res) => {
  req.log.info('Calling Users.getOne()');
  return UserService.findOne(req.params.userId)
    .then(user => res.send(user));
});

router.post('/', (req, res) => {
  const user = Object.assign({ id: uuidv4() }, req.body);
  req.log.info({ user }, 'Creating a new user');
  return UserService.create(user)
    .then(userRes => res.send(userRes));
});

router.put('/:userId/', (req, res) => {
  req.log.info({ id: req.params.userId }, 'Updating User');
  return UserService.update(req.params.userId, req.body)
    .then(user => res.send(user));
});

router.delete('/:userId/', (req, res) => {
  req.log.info({ id: req.params.userId }, 'Deleteing User');
  return UserService.delete(req.params.userId)
    .then(res.send(204));
});

module.exports = router;
