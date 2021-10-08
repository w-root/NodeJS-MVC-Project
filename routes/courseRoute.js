const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courseController')


router.get('/', courseController.getAllCourses)
router.post('/new', courseController.createCourse)

router.get('/:slug', courseController.getCourse)


module.exports = router