import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { StrictMode } from 'react';
import App from './App.js';
import SpotifyResultsPage from './pages/SpotifyResultsPage';
import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='results' element={<SpotifyResultsPage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
