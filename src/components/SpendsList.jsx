import React from 'react'
import Spend from './Spend'

const SpendsList = ({spends, setEditSpend}) => {
  return (
    <div className='listado-gastos contenedor'>
      <h2>{spends.length ? 'Spends' : 'No spends yet'} </h2>

    {spends.map( spend => (
        <Spend
            key={spend.id}
            spend={spend}
            setEditSpend={setEditSpend}
        />
    ))}

    

    </div>
  )
}

export default SpendsList
