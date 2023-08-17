import { useState, useEffect } from 'react'

const Filters = ({filter, setFilter}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label htmlFor="">Filter</label>
                    <select 
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="freeTime">Free time</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="mix">Mix</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters
