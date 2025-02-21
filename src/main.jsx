import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Hola from './Hola.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/hola' element={<Hola />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
