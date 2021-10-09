const User = require('../models/User')
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    const user = await User.create(req.body)
    try {
        res.status(200).redirect('/login').json({
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

exports.loginUser = async (req, res) => {
    const {email,password} = req.body

    const user = await User.findOne({email})

    try {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id
                    res.status(200).redirect('/')
                }
            })
        } else {
            console.log('email yok')
        }
    } catch {
        res.status(400).json({
            status: 'error',
            error
        })
    }
}

exports.logout = async (req, res) => {
   req.session.destroy( () =>{
    res.redirect('/login')
   })
}