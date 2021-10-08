const express = require('express')
const app = express()


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/smartedu-db');


const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')



//Template Engine
app.set("view engine", "ejs")


//Middle wares
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//Routes
app.use('/',pageRoute)
app.use('/courses',courseRoute)


const port = 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda yayında`)
})