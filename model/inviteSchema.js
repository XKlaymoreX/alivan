const mongoose = require('mongoose')

const inviteSchema = new mongoose.Schema({
    familyName: String, 
    presentsNumber: Number
})


module.exports = mongoose.model("Invitations", inviteSchema)