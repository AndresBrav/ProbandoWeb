import React from 'react'
import { Link } from 'react-router'
const Hola = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/" >Inicio</Link></li>
                </ul>
            </nav>
            <div>Hola como estan todos </div>
            <img
                src="https://i.imgur.com/zWvyPoX.jpg"
                // alt="Descripción de la imagen"
                style={{ width: '300px', height: 'auto' }} // Opcional: estilo para el tamaño
            />
        </>

    )
}

export default Hola