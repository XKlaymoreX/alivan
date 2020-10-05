const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3306;


app.use(express.static("client/build"))

if (process.env.NODE_ENV == "production") {
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
    app.use('/Private', require('./routes/private'))
} else {
    app.use('/Private', require('./routes/private'))
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))