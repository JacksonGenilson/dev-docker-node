const express = require('express');
const checkAuth = require('../Middleware/auth.middleware');
const exampleControllers = require('../Controllers/example.controllers');
const router = express.Router();

router.get('/get-example', exampleControllers.exampleGet);
router.post('/post-example', checkAuth, exampleControllers.examplePost);

module.exports = router