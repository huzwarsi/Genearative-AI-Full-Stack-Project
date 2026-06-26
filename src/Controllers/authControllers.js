const  jwt  = require('jsonwebtoken');
const userModel = require('../Models/user.model')
const bcrypt = require('bcrypt')

const register = async(req,res)=>{
    
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

const user = await User.create({
    username,
    email,
    password : hashedPassword
})

const token = jwt.sign({id: user._id, username: user.username},process.env.SecretKey,{expiresIn : '1d'})

}

module.exports = register