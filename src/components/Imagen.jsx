import React from 'react'

const Imagen = (props) => {
    console.log("Nieto props", props);
    return (
        <img src={props.srcImagen} alt=""/>
    )
}

export default Imagen
