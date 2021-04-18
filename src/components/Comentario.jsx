import React from 'react'
import Imagen from './Imagen'

const Comentario = (props) => {
    
    return (
        <div class="media">
            <Imagen srcImagen={props.urlImg} />
            <div className="media-body">
                <h5 className="mt-0">
                    {props.titulo}
                </h5>
                <p>{props.contenido}</p>
            </div>
            
        </div>
    )
}

export default Comentario
