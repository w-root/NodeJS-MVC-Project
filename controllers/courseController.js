const Course = require('../models/Course')
const Category = require('../models/Category')

exports.createCourse = async (req, res) => {
    const course = await Course.create(req.body)
    try {
        res.status(200).json({
            status: 'success',
            course
        })
    } catch {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}

exports.getAllCourses = async (req, res) => {
    const courses = await Course.find()
    const categories = await Category.find()

    try {
        res.status(200).render('courses', {
            status: 'success',
            courses,
            page_name: 'courses',
            categories
        })
    } catch {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}

exports.getCourse = async (req, res) => {
    const course = await Course.find({slug:req.params.slug})
    const categories = await Category.find()
    try {
        res.status(200).render('course-single', {
            status: 'success',
            course,
            page_name:"",
            categories
        })
    } catch {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}