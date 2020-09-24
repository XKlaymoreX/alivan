const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000 || process.env.PORT

app.route("/")
    .get((req, res) => {
        res.sendFile(express.static(path.join(__dirname,"client","build")))
    })

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))