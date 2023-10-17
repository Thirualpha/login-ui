import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Loginroutecomponent = () => {
  const [email,setEmail] = useState('')
  const [ password,setPassword] = useState('')

  const emailHandler = (event) =>{
    setEmail(event.target.value)
  }

  const passwordHandler = (event) =>{
    setPassword(event.target.value)
  }

const submitHandler = (event) =>{
        event.preventDefault()
        console.log(email, password)
}

  return (
    <React.Fragment>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>

      <div className='login-class'>
            <label>Email</label>
            <input
                type='email'
               
                placeholder='Enter your email address'
                value={email}
                onChange={emailHandler}
                required
            />
        </div>

        <div className='login-class'>
          <label>Password</label>
          <input type='password'
          
          placeholder='Enter your Password'
          value={password}
          onChange={passwordHandler}
          required />

        </div>

           
         <div className='mb-3'>
          <div>
            <input 
              type='checkbox'
              
              id='customCheck1'
              />

           
            <label  htmlFor='customCheck1'>
              Remember me?
            </label>
          </div>
          <div>
            <button type='submit'  >Submit</button>
          </div>
         
          <p >
            Forgot <a href='#'>Password?</a>
          </p>

          <p >
            New User? <Link to='/signup'>Register here!</Link>
          </p>

        </div>




      </form>


        {/* <div>loginroutecomponent</div>   */}

    </React.Fragment>
    
      )
}

export default Loginroutecomponent