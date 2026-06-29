import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Register = () => {

  const navigate = useNavigate()

  const submitHandler = (e)=>{ 
    
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={submitHandler}>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name='username' placeholder='Enter your Username' />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' placeholder='Enter email address' />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='Enter password' />
          </div>

          <button className='button primary-button'>Register</button>
        </form>
        <p>Already have an Account <Link to='/Login'>Login</Link></p>
      </div>
    </main>
  );
};



export default Register