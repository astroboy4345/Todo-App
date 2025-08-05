import React, { useState } from 'react'
import todo from '../../../assets/to_do_list.png'
import './Login.css'
import { data, Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

      const BASE_URL = "http://localhost:5000/auth/login";

     const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")


    const Login = ()=>{
            if(!username || !password || username.length < 4 || password < 8){
                  alert("Please Check your username and password");
                  return;
            }
            const userDetails = {username,password};
            axios.post(BASE_URL,userDetails)
            .then((res)=>{
                 if(!res.data.exist && !res.data.matched){
                     alert("Username and Password doesnot exist");
                 }else if(res.data.exist && !res.data.matched){
                     alert("Password not matched");
                 }else if(res.data.exist && res.data.matched){
                      console.log(res);
                      localStorage.setItem('user',username);
                      window.location.href = '/';
                 }
            }).catch((err)=>{
                 console.error('Found Error',err);
            })
    }


    return (

    <div className="big">
          <div className="headings">
                  <img src={todo} alt="Todo Icon" />
                  <h2>NoteSorts</h2>
          </div> 
    <div className='Login-page'>
          <div className="page">
             <div className="box">
                 <h1>Login </h1>
                 <input type="text" value={username} placeholder='Enter Your Username' onChange={(e)=>{setUsername(e.target.value)}}/>  
                 <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} />
                 <button onClick={Login}>Login</button>
              </div>
              <Link to="/signin">
                 <h3>Sign-in</h3>
               </Link>
 
          </div> 
    </div>
    </div>
  )
}
export default Login
