import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import App from './App.tsx'; // Importing the App component from './App.tsx'
import './index.css'; // Importing CSS styles

// Rendering the root component using ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* Wrapping the App component with React.StrictMode for additional checks */}
    <App /> {/* Rendering the App component */}
  </React.StrictMode>, // Closing tag for React.StrictMode
);
