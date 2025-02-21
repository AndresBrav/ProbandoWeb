import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/hola" >Hola</Link></li>
          <li><Link to="/acerca" >Acerca</Link></li>
        </ul>
      </nav>
      <div>
        <img
          src="https://i.imgur.com/zWvyPoX.jpg"
          // alt="Descripción de la imagen"
          style={{ width: '300px', height: 'auto' }} // Opcional: estilo para el tamaño
        />
        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
