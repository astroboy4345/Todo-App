import React, { useEffect, useState } from 'react';
import './Body.css';
import axios from 'axios';
import clear from '../../assets/delete1.png';
import add from '../../assets/plus2.png';
import deleteimg from '../../assets/delete.png';

const BASE_URL = 'http://localhost:5000/api/notes'; // Replace with your cloud base URL when ready

const Body = () => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [store, setStore] = useState([]);

  // Fetch notes on component mount
  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => setStore(res.data))
      .catch(err => console.error('Error in fetching notes', err));
  }, []);

  // Delete note by ID
  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(() => {
        setStore(prev => prev.filter(note => note._id !== id));
      })
      .catch(err => console.error('Error deleting the data', err));
  };

  // Add new note
  const OnclickAdd = () => {
    if (header.trim() === '' && content.trim() === '') return;

    const newNote = { header, content };

    axios.post(BASE_URL, newNote)
      .then(res => {
        setStore(prev => [...prev, res.data]);
        setHeader('');
        setContent('');
      })
      .catch(err => console.error('Error adding note:', err));
  };

  return (
    <div className='Body'>
      <div className="input-box">
        <div className="input-header-text">
          <input
            type="text"
            value={header}
            placeholder="Title..."
            onChange={(e) => setHeader(e.target.value)}
          />
          <textarea
            name="text"
            id="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="...."
          />
        </div>
        <img src={add} alt="Add" onClick={OnclickAdd} />
        <img src={clear} alt="Clear" onClick={() => {
          setHeader('');
          setContent('');
        }} />
      </div>

      <div className="show-task">
        {store.map((note, index) => (
            
          <div className="contents" key={note._id || index}>
            <div className="content-inner">
              <h3>{note.header}</h3>
              <div className="c-i-i">
                <img src={deleteimg} alt="Delete" onClick={() => {console.log("Deleting ID:", note._id);  handleDelete(note._id)}} />
              </div>
            </div>
            <p>{note.content}</p> 

          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
