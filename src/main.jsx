import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { StrictMode } from 'react'
import App from './App.jsx'
import SearchResults from './pages/SearchResults';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='results' element={<SearchResults />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
