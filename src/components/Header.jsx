import React from 'react'
import NewBudget from './NewBudget'
import ManageBudget from './ManageBudget'


const Header = ({    
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    spends,
    setSpends
}) => {
    return (
        <header>
            <h1>Budget app</h1>

            {isValidPresupuesto ? (
                <ManageBudget
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    spends={spends}
                    setSpends={setSpends}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
                
            ) : (
                <NewBudget
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )
            }

        </header>
    )
}

export default Header
