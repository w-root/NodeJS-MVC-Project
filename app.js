const express = require('express')
const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smartedu-db');
const session = require('express-session');

const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')
const userRoute = require('./routes/userRoute')


//Template Engine
app.set("view engine", "ejs")
//Template Engine


//Global Variable
global.userIn = null



//Middle wares
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(
    session({
        secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
        resave: false,
        saveUninitialized: true,
    })
);


//Routes
app.use('*', (req, res, next) => {
    userIn = req.session.userId;
    next();
});

app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)
app.use('/users', userRoute)


const port = 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda yayında`)
})