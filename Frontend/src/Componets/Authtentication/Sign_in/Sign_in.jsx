import React, { useState } from 'react'
import todo from '../../../assets/to_do_list.png'
import './Sign_in.css'
import { Link } from 'react-router-dom'
const Sign_in = () => {

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
                 <h1>Sign-in </h1>
                 <input type="text" value={username} placeholder='Enter Your Username' onChange={(e)=>{setUsername(e.target.value)}}/>  
                 <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} />
                 <button>Sign-In</button>
              </div>
              <Link to="/login">
                 <h3>log-in</h3>
               </Link>
 
          </div> 
    </div>
    </div>
  )
}
export default Sign_in
