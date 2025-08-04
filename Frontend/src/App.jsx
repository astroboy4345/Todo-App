import React, { useState } from 'react';
import Header from './Componets/Header/Header';
import Body from './Componets/Body/Body';
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='main'>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Body searchTerm={searchTerm} />
    </div>
  );
};

export default App;
