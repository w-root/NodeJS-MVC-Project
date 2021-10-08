const Category = require('../models/Category')

exports.createCategory = async (req, res) => {
    const category = await Category.create(req.body)
    try {
        res.status(200).json({
            status: 'success',
            category
        })
    } catch {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}

exports.getAllCategory = async (req, res) => {
   
}


