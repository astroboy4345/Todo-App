import React, { useEffect, useState } from 'react';
import './Body.css';
import axios from 'axios';
import clear from '../../assets/delete1.png';
import add from '../../assets/plus2.png';
import deleteimg from '../../assets/delete.png';

const BASE_URL = 'http://localhost:5000/api/notes'; 

const Body = ({ searchTerm = "" }) => {
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [store, setStore] = useState([]);


  useEffect(() => {
    axios.get(BASE_URL)
      .then(res => setStore(res.data))
      .catch(err => console.error('Error in fetching notes:', err));
  }, []);


  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/${id}`)
      .then(() => {
        setStore(prev => prev.filter(note => note._id !== id));
      })
      .catch(err => console.error('Error deleting note:', err));
  };

  // Add a new note
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

  const filteredNotes = store.filter(note =>
    (note.header?.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (note.content?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content..."
          />
        </div>
        <img src={add} alt="Add" onClick={OnclickAdd} />
        <img src={clear} alt="Clear" onClick={() => {
          setHeader('');
          setContent('');
        }} />
      </div>

      <div className="show-task">
        {filteredNotes.length === 0 ? (
          <p className="no-results">No matching notes found.</p>
        ) : (
          filteredNotes.map((note) => (
            <div className="contents" key={note._id}>
              <div className="content-inner">
                <h2>{note.header}</h2>
              </div>
              <p>{note.content}</p>
                      <div className="c-i-i">
                  <img
                    src={deleteimg}
                    alt="Delete"
                    onClick={() => handleDelete(note._id)}
                  />
                </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
