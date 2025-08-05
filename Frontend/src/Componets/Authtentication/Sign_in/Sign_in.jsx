import React, { useState } from 'react'
import todo from '../../../assets/to_do_list.png'
import './Sign_in.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Sign_in = () => {

      const BASE_URL = "http://localhost:5000/auth/signin"

     const [username,setUsername] = useState("");
    const [password,setPassword] = useState("")
    
    const SignIn = ()=>{
         if(!username || !password || username.length < 4 || password.length <8){
            alert("Please Enter unsername > 4 and password > 8 digit");
            return;
         }else{
             const newUser = {username,password};
             axios.post(BASE_URL,newUser)
             .then((res) =>{
                  if(res.data.exist == true){
                        alert("username already exist");
                  }else if(res.data.exist == false){
                        alert("Successfully added user");
                  }
                  console.log(res);
             }).catch(err => console.error('Error in adding  user', err))
         }
    }

    return (

    <div className="big">
          <div className="heading">
                  <img src={todo} alt="Todo Icon" />
                  <h2>NoteSotes</h2>
          </div> 
    <div className='Login-page'>
          <div className="page">
             <div className="box">
                 <h1>Sign-in </h1>
                 <input type="text" value={username} placeholder='Enter Your Username' onChange={(e)=>{setUsername(e.target.value)}}/>  
                 <input type="password" value={password} placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}} />
                 <button onClick={SignIn}>Sign-In</button>
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
