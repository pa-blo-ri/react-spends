import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import { dateFormat } from '../helpers/index.js'

import IconSaving from '../img/icono_ahorro.svg'
import IconHouse from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconMix from '../img/icono_gastos.svg'
import IconFreeTime from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'

const iconIndex = {
    saving: IconSaving,
    food: IconFood,
    house: IconHouse,
    freeTime: IconFreeTime,
    health: IconHealth,
    subscriptions: IconSubscriptions,
    mix: IconMix
}


const Spend = ({ spend, setEditSpend, deleteSpend }) => {
    const { id, name, amount, category, date } = spend;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setEditSpend(spend)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction 
            onClick={() => deleteSpend(id)}
            destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={iconIndex[category]} alt={'image_' + iconIndex[category]} />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>{category}</p>
                            <p className='nombre-gasto'>{name}</p>
                            <p className='fecha-gasto'><span>{dateFormat(date)}</span></p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Spend
