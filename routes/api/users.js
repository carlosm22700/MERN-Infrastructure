const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/check-token', usersCtrl.checkToken)

module.exports = router;