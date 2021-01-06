const express = require('express')
const inviteSchema = require('../model/inviteSchema')
const binSchema = require('../model/binSchema')
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
exports.getBin = async (req, res) => {
    try {
        const invitations = await binSchema.find({})
        res.status(200)
        return res.send(invitations)
    } catch (error) {
        return res.sendStatus(500)
    }
}
exports.deleteInvitation = async (req, res) => {
    try {
        const result = await inviteSchema.findByIdAndDelete(req.params.id)
        await binSchema.create({_id:result._id, familyName:result.familyName, presentsNumber: result.presentsNumber, __v:result.__v})
        return res.sendStatus(200)
    } catch (error) {
        res.status(500)
        return res.send("Could Not Delete The Element.\n Reason: 'Element Not Found!'")
    }
}


exports.destroyInvitation = async (req,res) => {
        try {
            const invitation = await binSchema.findByIdAndDelete(req.params.id)
            return res.sendStatus(200)
        } catch (error) {
            res.status(500)
            return res.send("Could Not Destroy The Element. \n Reason : 'Element Not Found!'")
        }
}