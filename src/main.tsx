import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { StrictMode } from 'react';
import AuthProvider from './context/AuthContext';
import ThemeProvider from './context/ThemeContext';
import App from './App.js';
import SpotifyResultsPage from './pages/SpotifyResultsPage';
import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <div className='min-h-screen bg-white dark:bg-[#121212] text-[#121212] dark:text-white'>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<App />}/>
              <Route path='results' element={<SpotifyResultsPage />} />
            </Routes>
          </AuthProvider>
        </div>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
)
