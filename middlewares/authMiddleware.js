const User = require('../models/User');

module.exports = (req, res, next) => {
  if(!req.session.userID){
    res.redirect('/login');
  }
 };
