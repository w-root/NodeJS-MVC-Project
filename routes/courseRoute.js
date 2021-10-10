const express = require('express')
const courseController = require('../controllers/courseController');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();


router.get('/',courseController.getAllCourses);
router.get('/:slug',courseController.getCourse);


router.delete('/:slug',courseController.deleteCourse);
router.put('/:slug',courseController.updateCourse);


router.post('/',roleMiddleware(["teacher", "admin"]), courseController.createCourse);
router.post('/enroll',courseController.enrollCourse);
router.post('/release',courseController.releaseCourse);


module.exports = router;
