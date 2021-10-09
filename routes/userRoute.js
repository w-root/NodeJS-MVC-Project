const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/signup', authController.createUser)
router.post('/signin', authController.loginUser)

router.get('/logout', authController.logout)

router.get('/dashboard',authMiddleware ,authController.getDashboardPage)

module.exports = router