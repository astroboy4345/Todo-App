import React from 'react'
import todo from '../../assets/checklist.png'
import './Header.css'
const Header = () => {
  return (
    <div className="upper-box">
    <div className='heading'>
      <img src={todo} alt="image" />
       <h2>Todo-list</h2>
    </div>
    </div>
  )
}

export default Header