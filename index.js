const express = require('express')
const path = require('path')
const app = express()
const PORT = 5000 || process.env.PORT;



if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    console.log("Muxone")
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))