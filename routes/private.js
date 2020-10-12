const express = require('express')
const router = express.Router()
const path = require('path')
const {checkProtection} = require('../controllers/auth')
const login = require('../controllers/private')

router.route("/")
    .get((req, res) => {
        res.status(200)
        res.sendFile(path.resolve('client', 'build', 'index.html'))
    })

router.route("/Dashboard")
    .get(checkProtection,(req, res) => {
        res.status(200)
        return res.sendFile(path.resolve('client', 'build', 'index.html'))
    })

router.route("/Login")
    .post(async (req, res) => login(req,res))

module.exports = router