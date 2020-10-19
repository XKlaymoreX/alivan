const express = require('express')
const router = express.Router()
const {newInvitation, getInvitations, deleteInvitation, getBin} = require('../controllers/invitations')
const {checkProtectionApi} = require('../controllers/auth')

router.route('/')
    .post((req,res) => newInvitation(req,res))
    .get(checkProtectionApi,(req,res) => getInvitations(req,res))

router.route('/bin')
    .get(checkProtectionApi,(req,res) => getBin(req,res))

router.route('/:id')
    .delete(checkProtectionApi,(req,res) => deleteInvitation(req,res))

module.exports = router