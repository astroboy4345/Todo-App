import React, { useState } from 'react'
import todo from '../../../assets/to_do_list.png'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {

     const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")


    return (

    <div className="big">
          <div className="heading">
                  <img src={todo} alt="Todo Icon" />
                  <h2>NoteSorts</h2>
          </div> 
    <div className='Login-page'>
          <div className="page">
             <div className="box">
                 <h1>Login </h1>
                 <input type="text" value={username} placeholder='Enter Your Username' onChange={(e)=>{setUsername(e.target.value)}}/>  
                 <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} />
                 <button>Login</button>
              </div>
              <Link to="/sign-in">
                 <h3>Sign-in</h3>
               </Link>
 
          </div> 
    </div>
    </div>
  )
}
export default Login
