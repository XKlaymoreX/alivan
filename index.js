const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000 || process.env.PORT

app.use("/",express.static(path.join(__dirname,"client","build")))

app.get("/",express.static(path.join(__dirname,"client","build")))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))