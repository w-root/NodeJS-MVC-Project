const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courseController')

const roleMiddleware = require('../middlewares/roleMiddleware')

router.get('/', courseController.getAllCourses)
router.post('/add',roleMiddleware(["teacher","admin"]), courseController.createCourse)

router.get('/:slug', courseController.getCourse)


module.exports = router