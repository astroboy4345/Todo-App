import React from 'react';
import todo from '../../assets/checklist.png';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="upper-box">
      <div className="heading">
        <img src={todo} alt="Todo Icon" />
        <h2>NoteSorts</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
