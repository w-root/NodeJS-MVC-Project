const express = require('express')
const router = express.Router()

const pageController = require('../controllers/pageController')


router.get('/', pageController.getIndexPage)
router.get('/about', pageController.getAboutPage)

router.get('/register', pageController.getRegisterPage)
router.get('/login', pageController.getLoginPage)


module.exports = router