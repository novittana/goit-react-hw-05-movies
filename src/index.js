import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { GlobalStyle } from 'styles/GlobalStyle';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename="/goit-react-hw-05-movies" */}
    <BrowserRouter >
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
