const { Router } = require('express');
const authController = require('../controllers/authControllers');

const router = Router();

// login
router.get('/', (authController.login_get));
router.get('/login', (authController.login_get));


// register
router.get('/registration',  (authController.registration_get));
router.get('/registration',  (authController.registration_post));

// login
router.get('/reset', (authController.reset_get));

// login
router.get('/confirmation', (authController.confirmation_get));

module.exports = router;