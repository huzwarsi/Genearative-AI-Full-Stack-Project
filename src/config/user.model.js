const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username already exists'],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true,'Account already exists in this email address'],
     
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const userModel  =  mongoose.model('Users', userSchema);

module.exports = userModel