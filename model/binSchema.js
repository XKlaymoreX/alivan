const mongoose = require('mongoose')

const binSchema = new mongoose.Schema({
    familyName: String, 
    presentsNumber: Number
})

module.exports = mongoose.model("Bin", binSchema)