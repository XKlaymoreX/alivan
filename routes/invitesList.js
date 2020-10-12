const express = require('express')
const router = express.Router()
const path = require('path')
const {newInvitation, getInvitations} = require('../controllers/invitations')
const {checkProtectionApi} = require('../controllers/auth')

router.route('/')
    .post((req,res) => newInvitation(req,res))
    .get(checkProtectionApi,(req,res) => getInvitations(req,res))

module.exports = router