const User = require("../Models/User")
var jwt = require('jsonwebtoken');

exports.isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authoraziation')

        var decoded = jwt.verify(token, process.env.privatekey)

        if(!decoded){
            return res.status(400).send({errors : [{msg : 'Invalid token' }]})
        }
        
        const findUser =  await User.findById(decoded.id)

        req.user = findUser

        next()
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Not authorized'}]})
    }
}