import React from 'react'

const Saludo = (props) => {
    console.log("Son los props -> ", props);
    return (
        <div>
            <h3>Componente de saludo</h3>
            <p>Este es el prop persona - {props.persona}</p>
            <p>Este es el prop edad - {props.edad}</p>
            
        </div>
    )
}

export default Saludo
