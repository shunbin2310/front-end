import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css';
import App from './component/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Home from './component/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>,
)
