import React, { useState } from 'react'
import '../auth.form.scss'
import { Link, useNavigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'




const Login = () => {

  const {loading , handleLogin} = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const submitHandler = async(e)=>{ 
    
    e.preventDefault()
    console.log('Form submitted')
   await handleLogin({email,password})
  }
  if(loading){
    return (
      <main><h1>Loading.....</h1></main>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={submitHandler}>
          <div className="input-group">
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' placeholder='Enter email address' onChange={(e)=>setEmail(e.target.value)} />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
          </div>

          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an Account <Link to='/Register'>Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
