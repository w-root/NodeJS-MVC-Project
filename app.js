const express = require('express')
const app = express()


//Template Engine
app.set("view engine", "ejs")

//middle wares
app.use(express.static("public"))


app.get('/', function (req, res) {
    res.render('index', {
        page_name: "index"
    })
})

app.get('/about', function (req, res) {
    res.render('about', {
        page_name: "about"
    })
})

const port = 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda yayında`)
})