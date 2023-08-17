import React from 'react'
import Spend from './Spend'

const SpendsList = ({ spends, setEditSpend, deleteSpend, spendsFilter, filter }) => {
  return (
    <div className='listado-gastos contenedor'>


      {
        filter ? (
          <>
            <h2>{spendsFilter.length ? 'Spends' : 'No spends yet from the selected category'} </h2>
            {spendsFilter.map(spend => (
              <Spend
                key={spend.id}
                spend={spend}
                setEditSpend={setEditSpend}
                deleteSpend={deleteSpend}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{spends.length ? 'Spends' : 'No spends yet'} </h2>
            {spends.map(spend => (
              <Spend
                key={spend.id}
                spend={spend}
                setEditSpend={setEditSpend}
                deleteSpend={deleteSpend}
              />
            ))}
          </>
        )
      }

    </div>
  )
}

export default SpendsList
