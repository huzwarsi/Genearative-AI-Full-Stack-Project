const  jwt  = require('jsonwebtoken');
const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt');
const BlacklistToken = require('../Models/tokenBlacklist');


/**
 * Register a new user
 * @route POST /api/auth/register
 */

const register = async(req,res)=>{
    try {
        
        const {username , email , password} = req.body;
        
        if(!username || !email || !password){
            return  res.status(400).json({
        message : 'All fields are required'
    })
};

const isUserAlreadyExist  = await userModel.findOne({
    $or: [{email},{username}]
})

if(isUserAlreadyExist){
    return res.status(400).json({
        message : 'This email or username is already exists'
    })
}


const hashedPassword = await bcrypt.hash(password, 12);

const user = await userModel.create({
    username,
    email,
    password : hashedPassword
})

const token = jwt.sign({id: user._id, username: user.username}, process.env.SecretKey, {expiresIn : '1d'})

res.cookie('token',token)

res.status(201).json({
    message : 'User registered Successfully',
    user: {
        id : user._id,
        username: user.username,
        email : user.email
    }
})

} catch (error) {
    console.log(error)
return    res.status(500).json({
    message : 'Something went wrong try again',
   
})
}

}

/**
 * Login existing user
 * @route POST /api/auth/login
 */
    
const login = async(req,res)=>{
    try {
        
   
    const {email,password} = req.body;

    if(!email || !password){
     return  res.status(400).json({
        message : 'All fields are required'
    })
    }

    const user = await userModel.findOne({
        email
    })

    if(!user){
         return  res.status(400).json({
        message : 'Invalid email or password'
    })}

   const isPasswordValid = await bcrypt.compare(password,user.password)

   if(!isPasswordValid){
     return  res.status(400).json({
        message : 'Invalid Credentials'
    })
   }
   
   
const token = jwt.sign({id: user._id, username: user.username}, process.env.SecretKey, {expiresIn : '1d'})

res.cookie('token',token)

res.status(200).json({
    message : 'User Login Successfully',
    user: {
        id : user._id,
        username: user.username,
        email : user.email
    }
})
 } catch (error) {

    console.log(error)
    return    res.status(500).json({
    message : 'Something went wrong try again',
   
})
    

}}



/**
 * Logout user and blacklist JWT
 * @route POST /api/auth/logout
 */

const logout = async(req,res)=>{
 
    
    const token = req.cookies.token
    
    if(token){ 
        
        await BlacklistToken.create({token})
        
    }
    res.clearCookie("token");


    res.status(200).json({
    message : 'User Logout Successfully',
        
})


}

module.exports = {register,login , logout }