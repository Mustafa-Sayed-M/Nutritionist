import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router-dom';
// Swiper Css
import 'swiper/css';

// Custom Contexts
import AppProviders from './Contexts/AppProviders';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>,
)