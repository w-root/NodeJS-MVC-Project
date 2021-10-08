const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')


router.get('/', categoryController.getAllCategory)
router.post('/add', categoryController.createCategory)




module.exports = router