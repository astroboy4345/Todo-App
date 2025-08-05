import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Import these
import Header from './Componets/Header/Header';
import Body from './Componets/Body/Body';
import './App.css';
import Login from './Componets/Authtentication/Login_Page/Login';
import Sign_in from './Componets/Authtentication/Sign_in/Sign_in';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <BrowserRouter>
      <Routes> 
        <Route 
          path="/" 
          element={
            <div className='main'>
              <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Body searchTerm={searchTerm} />
            </div>
          } 
        />
        
        <Route path="/login" element={<Login />} />
        <Route path='/sign-in' element={<Sign_in/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
