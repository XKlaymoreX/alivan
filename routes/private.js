const express = require('express')
const router = express.Router()
const path = require('path')
const crypto = require('crypto-js')
const db = require('../model/db')
const userSchema = require('../model/userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const checkProtection = (req,res,next) => {
    if (req.cookies.Authorization) {
        try {
            const tokenVer = jwt.verify(req.cookies.Authorization,process.env.JWT_SECRET)
            if(tokenVer){
                next()
            }
        } catch (error) {
            res.status(403)
           return res.redirect('/Private')
        }
    } else {
        res.status(403)
        return res.redirect('/Private')
    }
}


if (process.env.NODE_ENV != 'production') {
    const dotenv = require('dotenv').config()
}

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
    .post(async (req, res) => {
        const sentPassword = crypto.AES.decrypt(req.body.password, "2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgU").toString(crypto.enc.Utf8)
        try {
            const userFound = await userSchema.find({ user: req.body.user })
            if (userFound.length > 0) {
                const comparison = await bcrypt.compare(sentPassword, userFound[0].password)
                if (comparison) {
                    const userId = crypto.AES.encrypt(
                        userFound[0].id,
                        "2r5u8x/A?D(G+KaPdSgVkYp3s6v9y$B&E)H@McQeThWmZq4t7w!z%C*F-JaNdRgU").toString()
                    //TRUE, GENERATE COOKIE WITH JWT
                    const token = jwt.sign(
                        {
                            id: userId
                        }
                        , process.env.JWT_SECRET)

                    if (process.env.NODE_ENV != 'production') {
                        res.cookie('Authorization', token, {
                            httpOnly: true,
                            secure: false,
                            sameSite: true,
                        })
                    } else {
                        res.cookie('Authorization', token, {
                            httpOnly: true,
                            secure: true,
                            sameSite: true,
                        })
                    }

                    return res.sendStatus(200)
                } else {
                    res.status(403)
                    return res.send({ message: `Password not matching user: ${userFound[0].user}` })
                }
            } else {
                res.status(403)
                return res.send({ message: `User '${req.body.user}' not found` })
            }
        } catch (error) {
            console.log(error)
        }
    })




module.exports = router