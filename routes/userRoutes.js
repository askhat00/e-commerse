const express = require('express');
const { register, login, getUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/:id', getUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
