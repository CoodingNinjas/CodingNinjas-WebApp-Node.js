const { Router } = require('express');
const authController = require('../controllers/userControllers');

const router = Router();

const user = process.env.USER;

// user
router.get(`/${user}/home`, (authController.user_home));

module.exports = router;