import React from 'react'
import { useState } from 'react';
import Message from './Message';

const NewBudget = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

    const [ mensaje, setMensaje ] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();

       if ( !presupuesto || presupuesto < 0){
        setMensaje('Invalid budget, try again!');
        return
       }
       localStorage.setItem('presupuesto', presupuesto) 
       setMensaje('')
       setIsValidPresupuesto(true)

    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label className=''>Initial budget</label>
                    <input
                        type="number"
                        className='nuevo-presupuesto' 
                        placeholder= { presupuesto ? presupuesto :'Define your initial budget' }
                        onChange={ e => setPresupuesto(Number(e.target.value))}/>
                    <input type="submit" value="Add"/>
                    {mensaje && <Message type='error'> {mensaje} </Message>}
                </div>
            </form>
        </div>
    )
}

export default NewBudget
