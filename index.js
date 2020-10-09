const express = require('express')
const app = express()
const PORT = process.env.PORT || 3306;
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static("client/build"))
if (process.env.NODE_ENV == "production") {
    app.use('/Private', require('./routes/private'))
    //404 Route
    app.get("*", (req, res) => {
        res.status(404).send("Page Not Found")
    })
} else {
    app.use('/Private', require('./routes/private'))
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))