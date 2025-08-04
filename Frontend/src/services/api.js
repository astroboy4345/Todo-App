import axios from 'axios';
const BASE_URL = "http://localhost:5000/api/notes";
export const getNotes = () => axios.get(BASE_URL);
export const addNotes = () => axios.post(BASE_URL,note);
export const deleteNotes = () => axios.delete(`${BASE_URL}/${id}`);
