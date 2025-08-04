import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Make sure you have a <div id="root"></div> in your index.html
const container = document.getElementById('root');
const root = createRoot(container);

// Render the app
root.render(<App />);
