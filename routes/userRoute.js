const express = require('express')
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

router.post('/signup',
    [
        body('name').not().isEmpty().withMessage('İsminizi Giriniz'),


        body('email').isEmail().withMessage('Uygun bir email giriniz!')
        .custom((userEmail)=> {
            return User.findOne({email:userEmail}).then(user => {
                if (user) {
                    return Promise.reject('Email Kullanımda !')
                }
            })
        }),

        body('password').not().isEmpty().withMessage('Şifrenizi Giriniz !'),
    ],
    
    authController.createUser);

router.post('/login',authController.loginUser);
router.get('/logout',authController.logoutUser);
router.get('/dashboard',authMiddleware, authController.getDashboardPage);
router.delete('/:id',authController.deleteUser);


module.exports = router;