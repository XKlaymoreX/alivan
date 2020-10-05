const express = require('express')
const router = express.Router()
const path = require('path')


router.route("/")
    .get((req,res) => {
        res.status(200)
        res.sendFile(path.resolve('client','build','index.html'))
    })

module.exports = router