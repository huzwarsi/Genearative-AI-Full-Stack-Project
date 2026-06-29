import React from 'react'
import '../auth.form.scss'
import { Link, useNavigate} from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()


  const submitHandler = (e)=>{ 
    
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name='email' placeholder='Enter email address' />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name='password' placeholder='Enter password' />
          </div>

          <button className='button primary-button'>Login</button>
        </form>
        <p>Don't have an Account <Link to='/Register'>Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
