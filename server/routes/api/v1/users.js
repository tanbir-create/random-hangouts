const express = require('express');

const router = express.Router();

const usersApi = require('../../../controllers/api/v1/users');

router.post('/signup', usersApi.signUp);
router.post('/create-session', usersApi.createSession);

module.exports = router;