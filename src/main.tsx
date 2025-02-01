import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './ui/navbar';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 