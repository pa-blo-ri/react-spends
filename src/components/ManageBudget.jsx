import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ManageBudget = ({ presupuesto, spends, setSpends, setPresupuesto, setIsValidPresupuesto }) => {

    const [percent, setPercent] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
        const totalAvailable = presupuesto - totalSpent

        //CALCULATING SPENT PERECENT
        const newPercent = (((presupuesto - totalAvailable) / presupuesto) * 100).toFixed(2)

        setAvailable(totalAvailable)
        setSpent(totalSpent)

        setTimeout(() => {
            setPercent(newPercent)
        }, 500);
    }, [spends])


    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetBudget = () => {
        const result = confirm('Are you sure?')

        if (result) {
            setSpends([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    value={percent}
                    text={`You spent ${percent}%`}
                    styles={buildStyles({
                        pathColor: percent > 100 ? '#DC2626' : '#3b82F6',
                        trailColor: '#F5F5F5',
                        textColor: percent > 100 ? '#DC2626' : '#3b82F6'
                    })}
                />
            </div>
            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetBudget}
                    >
                        Reset budget
                </button>
                <p>
                    <span>Budget: </span> {formatAmount(presupuesto)}
                </p>
                <p className={`${available < 0 ? 'negativo' : ''}`}>
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
