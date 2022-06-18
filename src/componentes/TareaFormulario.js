import React, { useState } from 'react'
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid'; 

const TareaFormulario = (props) => {
  
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }
    
    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    } 
  
    return (
    <form 
        className="form"
        onSubmit={manejarEnvio} >
        <input 
            type="text" 
            className="input"
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
        />
        <button className="boton">
            Agregar Tarea
        </button>
    </form>
  )
}

export default TareaFormulario