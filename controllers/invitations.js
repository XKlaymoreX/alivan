const express = require('express')
const inviteSchema = require('../model/inviteSchema')
const Joi = require('@hapi/joi')


const invitationValidationSchema = Joi.object({
    familyName: Joi.string().min(2).max(20).required(),
    presentsNumber: Joi.number().min(1).max(10).required()
})

exports.newInvitation = async (req, res) => {
    try {
        const validation = await invitationValidationSchema.validateAsync({
            familyName: req.body.familyName,
            presentsNumber: req.body.presentsNumber
        })
        await inviteSchema.create(validation)
        return res.sendStatus(200)
    } catch (error) {
        return res.sendStatus(500)
    }
}

exports.getInvitations = async (req, res) => {
    try {
        const invitations = await inviteSchema.find({})
        res.status(200)
        return res.send(invitations)
    } catch (error) {
        return res.sendStatus(500)
    }
}
exports.deleteInvitation = async (req, res) => {
    try {
        const result = await inviteSchema.findByIdAndDelete(req.params.id)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

