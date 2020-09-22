const express = require('express')
const app = express()

app.route('/')
    .get((req,res) => {
        res.sendFile('./client/public/index.html')
    })

app.listen(3000 || process.env.PORT, () => console.log("Listening on port..."))