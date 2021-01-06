const express = require('express')
const app = express()
const PORT = process.env.PORT || 3100;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const db = require('./model/db')
if (process.env.NODE_ENV != 'production') {
    const dotenv = require('dotenv').config()
}
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static("client/build"))
if (process.env.NODE_ENV == "production") {
    app.use('/', require('./routes/home'))
    app.use('/api/v1/inviti', require('./routes/invitesList'))
    app.use('/Private', require('./routes/private'))
    //404 Route
    app.get("*", (req, res) => {
        res.status(404).send("Page Not Found")
    })
} else {
    app.use('/', require('./routes/home'))
    app.use('/api/v1/inviti', require('./routes/invitesList'))
    app.use('/Private', require('./routes/private'))
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))