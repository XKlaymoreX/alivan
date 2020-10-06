const mongoose = require('mongoose')

if (process.env.NODE_ENV != 'production') {
    const dotenv = require('dotenv').config()
}
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(res => console.log("Successfully connected to db"))
.catch(err => console.log(err))

module.exports = mongoose