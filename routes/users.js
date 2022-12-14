const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/profile',usersController.profile);

router.get('/sign-up',usersController.signUp);
router.get('/login',usersController.login);

router.post('/create', usersController.create);
router.post('/create-session',usersController.createSession);
router.get('/profile1',usersController.profile1)

module.exports = router;
