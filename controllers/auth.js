const jwt = require('jsonwebtoken')

exports.checkProtection = (req,res,next) => {
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
exports.checkProtectionApi = (req,res,next) => {
    if (req.cookies.Authorization) {
        try {
            const tokenVer = jwt.verify(req.cookies.Authorization,process.env.JWT_SECRET)
            if(tokenVer){
                next()
            }
        } catch (error) {
            res.status(403)
            return res.send("It seems you don't have the rights to access this API")
        }
    } else {
        res.status(403)
        return res.send("It seems you don't have the rights to access this API")
    }
}