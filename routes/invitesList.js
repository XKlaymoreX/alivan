const express = require('express')
const router = express.Router()
const path = require('path')
const {newInvitation, getInvitations, deleteInvitation} = require('../controllers/invitations')
const {checkProtectionApi} = require('../controllers/auth')

router.route('/')
    .post((req,res) => newInvitation(req,res))
    .get(checkProtectionApi,(req,res) => getInvitations(req,res))

router.route('/:id')
    .delete((req,res) => deleteInvitation(req,res))

module.exports = router