import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './Context/ThemeContext';
import { FetchBlogProvider } from "./Context/FetchBlogContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchBlogProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </FetchBlogProvider>
  </React.StrictMode>
);