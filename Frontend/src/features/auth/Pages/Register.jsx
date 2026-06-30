import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

const Register = () => {

  const {loading,handleRegister} = useAuth()
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = async(e)=>{ 
    

    e.preventDefault()
    await handleRegister({username,email,password})
    navigate('/')
  }
  if(loading){
    return(
      <main><h1>Loading...</h1></main>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={submitHandler}>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name='username' placeholder='Enter your Username' onChange={(e)=> setUsername(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' placeholder='Enter email address'  onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='Enter password' onChange={(e)=> setPassword(e.target.value)} />
          </div>

          <button className='button primary-button'>Register</button>
        </form>
        <p>Already have an Account <Link to='/Login'>Login</Link></p>
      </div>
    </main>
  );
};



export default Register