var express = require('express');
var router = express.Router();
const UserModel = require('../model/user.model');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await UserModel.find({});
  return res.status(201).send({ users });
});

/**
 * Create a user.
 */
router.post('/', async (req, res, next) => {
  const user = req.body;
  const newUser = new UserModel(user);
  return newUser.save();
});

module.exports = router;
