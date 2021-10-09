const user = require('../models/User')

module.exports = (req,res,next) =>{
    if(!req.session.userId){
        res.redirect('/login')
    }
    next()
}