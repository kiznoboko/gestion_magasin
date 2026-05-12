import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { ModalProvider } from './Components/ModalContext';


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <StrictMode>
    <ModalProvider>
    <App />
    </ModalProvider>
  </StrictMode>
  </BrowserRouter>

  ,
)
