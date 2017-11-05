const express = require('express');
const UserService = require('../lib/UserService');

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
  req.log.info('Creating a new user');
  return UserService.create(req.body)
    .then(user => res.send(user));
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
