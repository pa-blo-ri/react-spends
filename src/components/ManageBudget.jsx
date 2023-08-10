import { useState, useEffect } from 'react'

const ManageBudget = ({ presupuesto, spends }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
        const totalAvailable = presupuesto - totalSpent
        
        setAvailable(totalAvailable)
        setSpent(totalSpent)
    }, [spends])


    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafico aca</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Budget: </span> {formatAmount(presupuesto)}
                </p>
                <p>
                    <span>Avaliable: </span> {formatAmount(available)}
                </p>
                <p>
                    <span>Spent: </span> {formatAmount(spent)}
                </p>

            </div>
        </div>
    )
}

export default ManageBudget
