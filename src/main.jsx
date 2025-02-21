import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router'
import Hola from './Hola.jsx'
import Acerca from './Acerca.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter >
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/hola' element={<Hola />}></Route>
        <Route path='/acerca' element={<Acerca />}></Route>
      </Routes>
    </StrictMode>
  </HashRouter>
)
