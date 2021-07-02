const express = require('express');
const router = express.Router();


router.use('/users', require('./api/v1/users'));

console.log("Router loaded");

module.exports = router;
