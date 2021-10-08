const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courseController')


router.get('/', courseController.getAllCourses)
router.post('/add', courseController.createCourse)

router.get('/:slug', courseController.getCourse)


module.exports = router