const jwt = require('jsonwebtoken')
const BlacklistToken = require('../Models/tokenBlacklist')

const authUser = async(req,res,next)=>{

    const token = req.cookies.token 
    
    if(!token){
        return res.status(401).json({
            message : 'Token not Provided',
        })
    }

    const isTokenBlacklist = await BlacklistToken.findOne({
        token
    })
    
    if(isTokenBlacklist){
         return res.status(401).json({
            message : 'Token is not valid',
        })
    }
    try {
        
        const decoded =  jwt.verify(token, process.env.SecretKey)
        req.user = decoded
        next()
        
        
    } catch (error) {
        return res.status(401).json({
            message : 'Invalid Token',
        })
    }
    
    
}
    
    
    
module.exports = authUser