import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img className='imagen' src={props.imgSrc} alt="" />
            <div>
                <div className='titulo-contador'>
                    <h2>{props.numero}. {props.titulo}</h2>
                    <p>Contador: {props.contador}</p>
                </div>
                <p>{props.texto}</p>
                <button>Detalles</button>
            </div>
        </div>
    )
}

export default Card