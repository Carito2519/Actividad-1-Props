import React from 'react'

const Contador = ({ contador, aumentarContador, decrementarContador, resetContador }) => {
    return (
        <div className=''>
            <div>Contador: {contador}</div>
            <button onClick={aumentarContador}>Incrementar</button>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={resetContador}>Resetear</button>
        </div>
    )
}

export default Contador