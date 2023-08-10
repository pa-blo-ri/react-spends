import React from 'react'
import NewBudget from './NewBudget'
import ManageBudget from './ManageBudget'


const Header = ({    
    presupuesto,
    setPresupuesto,
    isValidPresupuesto,
    setIsValidPresupuesto,
    spends
}) => {
    return (
        <header>
            <h1>Budget app</h1>

            {isValidPresupuesto ? (
                <ManageBudget
                    presupuesto={presupuesto}
                    spends={spends}
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
