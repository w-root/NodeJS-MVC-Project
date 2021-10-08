const User = require('../models/User')

exports.createUser = async (req, res) => {
    const user = await User.create(req.body)
    try {
        res.status(200).json({
            status: 'success',
            user
        })
    } catch {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}


