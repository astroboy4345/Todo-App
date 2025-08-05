import React from 'react';
import todo from '../../assets/checklist.png';
import profile from '../../assets/profile.png';
import './Header.css';
import { useState } from 'react';

const Header = ({ searchTerm, setSearchTerm }) => {

  const [click ,setClick] = useState(true);
  const [userData,setUserData] = useState("");

  const handleClick = () =>{
       const userDatas = localStorage.getItem("user");
        console.log(userDatas);
        setClick(!click);
        setUserData(userDatas);
  }



  return (
    <div className="upper-box">
      <div className="headingse">
        <img src={todo} alt="Todo Icon" />
        <h2>NoteSotes</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="profile" onClick={handleClick}>
          <img src={profile} alt="profile-image" />
      </div>
      <div className={click ? 'show-info' : 'profile-info'}>
           <h3>Welcome! {userData}</h3>
           <button>Switch Account</button>
      </div>
    </div>
  );
};

export default Header;
