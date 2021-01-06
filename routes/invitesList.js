const express = require('express')
const router = express.Router()
const {newInvitation, getInvitations, deleteInvitation, getBin,destroyInvitation} = require('../controllers/invitations')
const {checkProtectionApi} = require('../controllers/auth')

router.route('/')
    .post((req,res) => newInvitation(req,res))
    .get(checkProtectionApi,(req,res) => getInvitations(req,res))

router.route('/bin')
    .get(checkProtectionApi,(req,res) => getBin(req,res))

router.route('/:id')
    .delete(checkProtectionApi,(req,res) => deleteInvitation(req,res))


router.route('/bin/:id')
    .delete(checkProtectionApi, (req,res) => destroyInvitation(req,res))


module.exports = router